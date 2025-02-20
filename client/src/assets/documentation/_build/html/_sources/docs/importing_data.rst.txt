==================
Importing Data
==================

To import data, under the import tab click the Browse button. This will open a
file dialog that will allow you to select one or multiple files. If more than 
one file is selected, DIALS treats these files as different orientations of the
same experiment. 

By default, a folder will be created in the same directory as the imported images
with the naming convention dv_yyyy-mm-dd-hh-mm-ss. This is where all processing
files will be stored for this session. The location of this folder can be changed 
by clicking the Processing Directory button and selecting a different folder. 
If you want to continue a previous session you can load a given folder containing 
processing files using File -> Load Data Processing Folder. You can also load 
images using File -> Load Images. 

After opening files the output of DIALS will be shown on the algorithm panel.
Along the top of the GUI a summary is given of the experiment. This will include
more information as you proceed through data processing. The Active files...
dropdown in the top left shows which files are currently open. Opening additional 
images, or even the same images again, will create a new processing session (with 
a separate folder). This dropdown menu can be used to move between sessions.

In the viewer panel the first orientation will be shown in detector space. Moving
the mouse over a detector panel in this viewer will show the panel name and 
coordinates. Clicking on a panel will generate the line profile along the 
time-of-flight direction in the lineplot, shown underneath the experiment viewer. 
In the experiment viewer menu (toggled by pressing s), different orientations 
can be shown by selecting from the orientations dropdown menu. Importing 
data enables the Find Spots tab in the algorithm panel. The full dials importing
documentation can be found `here <https://dials.github.io/documentation/programs/dials_import.html>`_.

.. image:: ../_static/import_data.png
   :alt: Overview after importing data
   :align: center