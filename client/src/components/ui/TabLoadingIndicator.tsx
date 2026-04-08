import { useState } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

interface TabLoadingIndicatorProps {
  loading: boolean;
  /** If provided, clicking the indicator while loading calls this to cancel */
  onCancel?: () => void;
}

/**
 * A fixed-size (20px) slot that always occupies the same space in a tab label.
 * When not loading it is invisible. When loading it shows a spinner, and if
 * onCancel is provided it switches to an X icon on hover.
 */
export function TabLoadingIndicator({ loading, onCancel }: TabLoadingIndicatorProps) {
  const [hovered, setHovered] = useState(false);

  const showCancel = loading && onCancel && hovered;
  const showSpinner = loading && !showCancel;

  return (
    <span
      style={{ display: "inline-flex", width: 20, height: 20, alignItems: "center", justifyContent: "center", visibility: loading ? "visible" : "hidden", flexShrink: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => {
        if (loading && onCancel) {
          e.stopPropagation();
          onCancel();
        }
      }}
    >
      {showCancel
        ? <FontAwesomeIcon icon={faXmark} style={{ cursor: "pointer" }} />
        : <ClipLoader color="#ffffff" loading={showSpinner} size={16} aria-label="Loading Spinner" />
      }
    </span>
  );
}
