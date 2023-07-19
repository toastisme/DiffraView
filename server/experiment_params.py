# Styles

from __future__ import annotations

style_header = (
    {
        "color": "white",
        "backgroundColor": "rgb(68, 68, 68)",
        "font_size": "12px",
        "text_align": "center",
        "fontWeight": "bold",
        "border": "None",
    },
)
style_data = (
    {
        "color": "white",
        "backgroundColor": "rgb(50, 50, 50)",
        "font_size": "12px",
        "text_align": "center",
        "border": "None",
    },
)

# Beam

beam_headers = [
    {
        "name": "Sample to Moderator Distance (mm)",
        "id": "Sample to Moderator Distance (mm)",
    },
    {"name": "Sample to Source Direction", "id": "Sample to Source Direction"},
]

beam_values = [
    {"Sample to Moderator Distance (mm)": "-", "Sample to Source Direction": "-"}
]

# Detector

detector_headers = [
    {"name": "Name", "id": "Name"},
    {"name": "Origin (mm)", "id": "Origin (mm)"},
    {"name": "Fast Axis", "id": "Fast Axis"},
    {"name": "Slow Axis", "id": "Slow Axis"},
    {"name": "Pixels", "id": "Pixels"},
    {"name": "Pixel Size (mm)", "id": "Pixel Size (mm)"},
]

detector_values = [
    {
        "Name": "-",
        "Origin (mm)": "-",
        "Fast Axis": "-",
        "Slow Axis": "-",
        "Pixels": "-",
        "Pixel Size (mm)": "-",
    }
]

# Sequence

sequence_headers = [
    {"name": "Image Range", "id": "Image Range"},
    {"name": "ToF Range (s)", "id": "ToF Range (s)"},
    {"name": "Wavelength Range (A)", "id": "Wavelength Range (A)"},
]

sequence_values = [
    {"Image Range": "-", "ToF Range (s)": "-", "Wavelength Range (A)": "-"}
]

# Goniometer

goniometer_headers = [
    {"name": "Orientation (deg)", "id": "Orientation (deg)"},
]

goniometer_values = [{"Orientation (deg)": "-"}]

# Crystal

crystal_headers = [
    {"name": "a", "id": "a"},
    {"name": "b", "id": "b"},
    {"name": "c", "id": "c"},
    {"name": "alpha", "id": "alpha"},
    {"name": "beta", "id": "beta"},
    {"name": "gamma", "id": "gamma"},
    {"name": "Space Group", "id": "Space Group"},
]

crystal_values = [
    {
        "a": "-",
        "b": "-",
        "c": "-",
        "alpha": "-",
        "beta": "-",
        "gamma": "-",
        "Space Group": "-",
    }
]

# Reflection table

reflection_table_headers = [
    {"name": "Panel", "id": "Panel"},
    {"name": "xy (px)", "id": "xy (px)"},
    {"name": "ToF (usec)", "id": "ToF (usec)"},
    {"name": "Bounding Box", "id": "Bounding Box"},
    {"name": "Intensity Sum (AU)", "id": "Intensity Sum (AU)"},
    {"name": "xy (mm)", "id": "xy (mm)"},
    {"name": "Wavelength (A)", "id": "Wavelength (A)"},
    {"name": "Frame", "id": "Frame"},
    {"name": "s1", "id": "s1"},
    {"name": "rlp", "id": "rlp"},
    {"name": "Miller Index", "id": "Miller Index"},
]

reflection_table_values = [
    {
        "Panel": "-",
        "xy (px)": "-",
        "xy (mm)": "-",
        "ToF (usec)": "-",
        "Wavelength (A)": "-",
        "Intensity Sum (AU)": "-",
        "Frame": "-",
        "s1": "-",
        "Miller Index": "-",
        "rlp": "-",
        "Bounding Box": "-",
    }
]

bravais_lattices_table_headers = [
    {"name": "Candidate", "id": "Candidate"},
    {"name": "Metric Fit", "id": "Metric Fit"},
    {"name": "RMSD", "id": "RMSD"},
    {"name": "Min/Max CC", "id": "Min/Max CC"},
    {"name": "#Spots", "id": "#Spots"},
    {"name": "Lattice", "id": "Lattice"},
    {"name": "Unit Cell", "id": "Unit Cell"},
]

bravais_lattices_table_values = [
    {
        "Candidate": "-",
        "Metric Fit": "-",
        "RMSD": "-",
        "Min/Max CC": "-",
        "#Spots": "-",
        "Lattice": "-",
        "Unit Cell": "-",
    }
]
