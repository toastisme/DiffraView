import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { AdvancedOption, ParamDefinition } from "@/types"

const MAX_SUGGESTIONS = 50;

// As the server's check (backends/dials/params.py), for feedback while typing
const NOT_ALLOWED = /[\n\r{}"'=#$;`\\!]/;
const NUMBER = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
const INTEGER = /^[+-]?\d+$/;
const STRING = /^[A-Za-z0-9_.,:+\- ]*$/;
const SPACE_GROUP = /^[A-Za-z0-9_.,:+\-/() ]*$/;
const BOOLEAN = ["true", "false", "yes", "no", "1", "0"];

function paramValueError(definition: ParamDefinition | undefined, value: string): string | null {
  if (!definition) return "Unknown parameter";
  const stripped = value.trim();
  if (!stripped) return "Enter a value";
  if (NOT_ALLOWED.test(value)) return "Contains characters not allowed";
  if (["none", "auto"].includes(stripped.toLowerCase())) return null;
  const tokens = stripped.split(/[\s,]+/).filter(Boolean);
  const all = (re: RegExp) => tokens.length > 0 && tokens.every((t) => re.test(t));
  switch (definition.type) {
    case "float":
      return tokens.length === 1 && NUMBER.test(tokens[0]) ? null : "Expected a number";
    case "int":
      return tokens.length === 1 && INTEGER.test(tokens[0]) ? null : "Expected a whole number";
    case "floats":
    case "unit_cell":
      return all(NUMBER) ? null : "Expected a list of numbers";
    case "ints":
      return all(INTEGER) ? null : "Expected a list of whole numbers";
    case "bool":
      return BOOLEAN.includes(stripped.toLowerCase()) ? null : "Expected True or False";
    case "choice": {
      const chosen = stripped.split(/[\s+]+/).filter(Boolean).map((c) => c.replace(/^\*/, ""));
      return chosen.length > 0 && chosen.every((c) => definition.choices.includes(c))
        ? null : `Expected one of ${definition.choices.join(", ")}`;
    }
    case "str":
    case "strings":
    case "qstr":
      return STRING.test(stripped) ? null : "Expected plain text (letters, numbers and _ . , : + -)";
    case "space_group":
      return SPACE_GROUP.test(stripped) ? null : "Expected a space group";
    default:
      return `${definition.type} values are not supported`;
  }
}

// Last two parts of a path, e.g. filter.d_min
function shortPath(path: string): string {
  return path.split(".").slice(-2).join(".");
}

// Lower is better; null if no match. Every typed word must be in the path.
function matchScore(definition: ParamDefinition, query: string): number | null {
  const q = query.trim().toLowerCase();
  if (!q) return definition.expertLevel;
  const path = definition.path.toLowerCase();
  const tokens = q.split(/[\s.]+/).filter(Boolean);
  if (tokens.every((t) => path.includes(t))) {
    const last = tokens[tokens.length - 1];
    const name = path.split(".").pop() ?? "";
    let score = 2;
    if (name.startsWith(last)) score = 0;
    else if (path.split(/[._]/).some((word) => word.startsWith(last))) score = 1;
    return score * 10 + definition.expertLevel;
  }
  if (q.length >= 3 && definition.help.toLowerCase().includes(q)) {
    return 30 + definition.expertLevel;
  }
  return null;
}

interface Editing {
  // null for a new option
  index: number | null;
  path: string;
}

interface ParamSearchProps {
  // null until loaded
  definitions: ParamDefinition[] | null;
  options: AdvancedOption[];
  onChange: (options: AdvancedOption[]) => void;
  onFocus?: () => void;
  id?: string;
}

/**
 * Search box for a program's parameters. Choosing one asks for its value, and
 * the option is then kept as a chip (click to edit). 
 */
export function ParamSearch({ definitions, options, onChange, onFocus, id }: ParamSearchProps) {
  const [text, setText] = React.useState("");
  const [editing, setEditing] = React.useState<Editing | null>(null);
  const [open, setOpen] = React.useState(false);
  const [highlighted, setHighlighted] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  const byPath = React.useMemo(
    () => new Map((definitions ?? []).map((d) => [d.path, d])),
    [definitions],
  );
  const editingDefinition = editing ? byPath.get(editing.path) : undefined;

  const nameSuggestions = React.useMemo(() => {
    if (editing || !definitions) return [];
    const used = new Set(options.map((o) => o.path));
    return definitions
      .filter((d) => d.multiple || !used.has(d.path))
      .map((d) => ({ d, score: matchScore(d, text) }))
      .filter((m): m is { d: ParamDefinition, score: number } => m.score !== null)
      .sort((a, b) => a.score - b.score || a.d.path.localeCompare(b.d.path))
      .slice(0, MAX_SUGGESTIONS)
      .map((m) => m.d);
  }, [editing, definitions, options, text]);

  const valueSuggestions = React.useMemo(() => {
    if (!editingDefinition) return [];
    const words = editingDefinition.type === "bool" ? ["True", "False"] : editingDefinition.choices;
    const q = text.trim().toLowerCase();
    return words.filter((w) => w.toLowerCase().startsWith(q));
  }, [editingDefinition, text]);

  const suggestions = editing ? valueSuggestions : nameSuggestions.map((d) => d.path);
  const valueError = editing ? paramValueError(editingDefinition, text) : null;

  React.useEffect(() => setHighlighted(0), [text, editing]);

  React.useEffect(() => {
    listRef.current?.querySelector(`[data-index="${highlighted}"]`)?.scrollIntoView({ block: "nearest" });
  }, [highlighted]);

  const startEditing = (path: string, index: number | null, value: string) => {
    setEditing({ index, path });
    setText(value);
    setOpen(true);
    inputRef.current?.focus();
  };

  const stopEditing = () => {
    setEditing(null);
    setText("");
  };

  const commit = (value: string) => {
    if (!editing || paramValueError(editingDefinition, value) !== null) return;
    const option = { path: editing.path, value: value.trim() };
    const next = [...options];
    if (editing.index === null) next.push(option);
    else next[editing.index] = option;
    onChange(next);
    stopEditing();
  };

  const choose = (suggestion: string) => {
    if (editing) commit(suggestion);
    else startEditing(suggestion, null, "");
  };

  const remove = (index: number) => {
    stopEditing();
    onChange(options.filter((_, i) => i !== index));
  };

  const onTextChange = (value: string) => {
    // "d_min=2" chooses the parameter typed (or the highlighted suggestion)
    if (!editing && value.includes("=")) {
      const [name, ...rest] = value.split("=");
      const typed = name.trim();
      const exact = (definitions ?? []).filter((d) => d.path === typed || d.path.endsWith("." + typed));
      const path = exact.length === 1 ? exact[0].path : nameSuggestions[highlighted]?.path;
      if (path) {
        startEditing(path, null, rest.join("=").trimStart());
        return;
      }
    }
    setText(value);
    setOpen(true);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp": {
        e.preventDefault();
        setOpen(true);
        if (suggestions.length === 0) return;
        const step = e.key === "ArrowDown" ? 1 : -1;
        setHighlighted((h) => (h + step + suggestions.length) % suggestions.length);
        return;
      }
      case "Tab":
        // Completes the highlighted parameter name
        if (!editing && text && open && suggestions.length > 0) {
          e.preventDefault();
          choose(suggestions[highlighted]);
        }
        return;
      case "Enter":
        e.preventDefault();
        if (open && suggestions.length > 0) choose(suggestions[highlighted]);
        else if (editing) commit(text);
        return;
      case "Escape":
        if (editing) stopEditing();
        else setOpen(false);
        return;
      case "Backspace":
        // Back to choosing the parameter
        if (editing && text === "") {
          e.preventDefault();
          const back = editing.index === null ? editing.path : "";
          setEditing(null);
          setText(back);
        }
        return;
    }
  };

  const onBlur = () => {
    setOpen(false);
    if (!editing) return;
    if (valueError === null) commit(text);
    else if (text.trim() === "" && editing.index === null) stopEditing();
  };

  const placeholder = editing
    ? (editingDefinition?.default && editingDefinition.default !== "None" ? `default ${editingDefinition.default}` : editingDefinition?.type ?? "")
    : options.length === 0 ? "Search parameters, e.g. d_min" : "Add parameter";

  return (
    <PopoverPrimitive.Root open={open}>
      <PopoverPrimitive.Anchor asChild>
        <div
          className="flex flex-wrap items-center gap-1 min-h-10 w-full rounded-md border bg-background px-2 py-1 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
          onClick={() => inputRef.current?.focus()}
        >
          {options.map((option, i) => {
            if (editing?.index === i) return null;
            const error = definitions ? paramValueError(byPath.get(option.path), option.value) : null;
            return (
              <span
                key={i}
                title={`${option.path} = ${option.value}${error ? `\n${error}` : ""}`}
                className={cn(
                  "inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-xs",
                  error ? "border-destructive text-destructive" : "border-transparent bg-secondary text-secondary-foreground",
                )}
              >
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (editing && valueError === null) commit(text);
                    startEditing(option.path, i, option.value);
                  }}
                >
                  {shortPath(option.path)} = {option.value}
                </button>
                <button
                  type="button"
                  aria-label={`Remove ${option.path}`}
                  className="opacity-60 hover:opacity-100"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => { e.stopPropagation(); remove(i); }}
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            );
          })}
          {editing && (
            <span className="font-mono text-xs text-muted-foreground" title={editing.path}>
              {shortPath(editing.path)} =
            </span>
          )}
          <input
            ref={inputRef}
            id={id}
            value={text}
            placeholder={placeholder}
            autoComplete="off"
            spellCheck={false}
            role="combobox"
            aria-expanded={open}
            aria-invalid={editing !== null && text !== "" && valueError !== null}
            className={cn(
              "flex-1 min-w-[8rem] bg-transparent py-1 outline-none placeholder:text-muted-foreground",
              editing && "font-mono text-xs",
            )}
            onChange={(e) => onTextChange(e.target.value)}
            onKeyDown={onKeyDown}
            onFocus={() => { setOpen(true); onFocus?.(); }}
            onBlur={onBlur}
          />
        </div>
      </PopoverPrimitive.Anchor>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          style={{ width: "var(--radix-popper-anchor-width)" }}
          className="z-50 rounded-md border bg-popover p-1 text-sm text-popover-foreground shadow-md"
        >
          {editing ? (
            <div>
              <div className="px-2 py-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs">{editing.path}</span>
                  {editingDefinition && (
                    <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                      {editingDefinition.type}{editingDefinition.default ? ` · default ${editingDefinition.default}` : ""}
                    </span>
                  )}
                </div>
                {editingDefinition?.help && (
                  <div className="mt-1 text-xs text-muted-foreground">{editingDefinition.help}</div>
                )}
                {text !== "" && valueError && (
                  <div className="mt-1 text-xs text-destructive">{valueError}</div>
                )}
              </div>
              <SuggestionList listRef={listRef}>
                {valueSuggestions.map((word, i) => (
                  <Suggestion key={word} index={i} highlighted={i === highlighted} onHover={setHighlighted} onChoose={() => choose(word)}>
                    <span className="font-mono">{word}</span>
                  </Suggestion>
                ))}
              </SuggestionList>
            </div>
          ) : definitions === null ? (
            <div className="px-2 py-3 text-center text-muted-foreground">Loading parameters…</div>
          ) : nameSuggestions.length === 0 ? (
            <div className="px-2 py-3 text-center text-muted-foreground">
              {text ? `No parameter matches “${text}”` : "No more parameters"}
            </div>
          ) : (
            <SuggestionList listRef={listRef}>
              {nameSuggestions.map((d, i) => {
                const parts = d.path.split(".");
                const name = parts.pop();
                return (
                  <Suggestion key={d.path} index={i} highlighted={i === highlighted} onHover={setHighlighted} onChoose={() => choose(d.path)}>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs">
                        <span className="text-muted-foreground">{parts.length ? parts.join(".") + "." : ""}</span>
                        <span className="font-semibold">{name}</span>
                      </span>
                      <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                        {d.type}{d.multiple ? " · repeatable" : ""}{d.expertLevel > 0 ? " · expert" : ""}
                      </span>
                    </div>
                    {d.help && <div className="line-clamp-2 text-xs text-muted-foreground">{d.help}</div>}
                  </Suggestion>
                );
              })}
            </SuggestionList>
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

function SuggestionList({ listRef, children }: { listRef: React.RefObject<HTMLDivElement | null>, children: React.ReactNode }) {
  return (
    <div ref={listRef} role="listbox" className="max-h-72 overflow-y-auto">
      {children}
    </div>
  );
}

interface SuggestionProps {
  index: number;
  highlighted: boolean;
  onHover: (index: number) => void;
  onChoose: () => void;
  children: React.ReactNode;
}

function Suggestion({ index, highlighted, onHover, onChoose, children }: SuggestionProps) {
  return (
    <div
      role="option"
      aria-selected={highlighted}
      data-index={index}
      className={cn("cursor-default rounded-sm px-2 py-1.5", highlighted && "bg-accent text-accent-foreground")}
      // Keeps focus in the search box
      onMouseDown={(e) => { e.preventDefault(); onChoose(); }}
      onMouseEnter={() => onHover(index)}
    >
      {children}
    </div>
  );
}
