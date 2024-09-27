==================
Integration
==================

DIALS supports integration via shoebox summation, and through profile fitting.
The 1D profile refers to a Gaussian convolved with two back-to-back exponential functions,
as described `here <https://www.nature.com/articles/srep36628.pdf>`_.

Before running integration, the Integration Profiler viewer can be used to 
observed the quality of fit for a given reflection. With the viewer open, when 
clicking on a reflection in the Reflection Table, the profile fit will be calculated and shown.

Integration can be run with and without corrections. Corrections can be applied via the 
Apply Corrections button. Here the Lorentz, incident spectrum and spherical absorption correction 
described here can be applied. After integration, the Save HKL button can be used to output the data
as a .hkl file.

.. image:: ../_static/integration.png
   :alt: Overview showing the integration profiler (left) and options for applying corrections
   :align: center