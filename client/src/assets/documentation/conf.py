# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'DiffraView'
copyright = '2025, David McDonagh'
author = 'David McDonagh'
release = '2025'

# -- General configuration ---------------------------------------------------
extensions = []

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# -- Options for HTML output -------------------------------------------------
html_theme = 'sphinx_material'

# Material theme options (theme-specific)
html_theme_options = {
    'nav_title': project,
    'color_primary': 'black',
    'color_accent': 'black',
    
    # Set the repo location to get a GitHub badge with stats
    'repo_url': 'https://github.com/toastisme/diffraview',
    'repo_name': 'DiffraView',
    
    # Visible levels in the navigation bar
    'globaltoc_depth': 2,
    'globaltoc_collapse': True,
    'globaltoc_includehidden': False,
}

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']