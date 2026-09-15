
def get_formatted_text(result):
	raw_result = result.split("\n")
	result = ""
	parsing_table = False
	written_header = False

	def line_is_start_of_table(lines, idx):
		if not lines[idx].startswith("+-"):
			return False
		if idx + 1 == len(lines):  # end of table at end of file
			return False
		return lines[idx + 1].startswith("|")

	def line_is_end_of_table(lines, idx):
		if not lines[idx].startswith("+-"):
			return False
		if idx + 1 < len(lines):  # end of table at end of file
			return not lines[idx + 1].startswith("|")
		return True

	skip_next_line = False
	for count, line in enumerate(raw_result):
		if line_is_start_of_table(raw_result, count):
			parsing_table = True
			html_table = '<table border="1" cellpadding="5px" width="100%" bordercolor="white" frame="box">'
		if parsing_table:
			if line.startswith("| "):
				raw_ls = line.split("|")

				# Header runs over two lines
				if not written_header and not raw_result[count + 1].startswith(
					"|-"
				):
					raw_ls2 = raw_result[count + 1].split("|")
					assert len(raw_ls) == len(raw_ls2)
					raw_ls = [
						f"{i} {raw_ls2[c_i].strip()}"
						for c_i, i in enumerate(raw_ls)
					]
					skip_next_line = True

				ls = [i.strip() for i in raw_ls]
				if not written_header:
					html_table += (
						"<tr align='right'>"
						+ "".join([f"<th>{heading}</th>" for heading in ls])
						+ "</tr>"
					)
					written_header = True
				elif skip_next_line:
					skip_next_line = False
					continue
				else:
					html_table += (
						"<tr align='right'>"
						+ "".join([f"<td>{cell}</td>" for cell in ls])
						+ "</tr>"
					)

			if line_is_end_of_table(raw_result, count):
				parsing_table = False
				written_header = False
				result += html_table + "</table>"
		elif line.startswith("###########"):
			result += line[:60] + "<br>"
		else:
			result += line + "<br>"
	return result
