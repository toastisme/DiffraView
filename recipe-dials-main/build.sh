#!/usr/bin/env bash

if [[ $CONDA_TOOLCHAIN_BUILD != $CONDA_TOOLCHAIN_HOST ]]; then
    # Conda does some swizzling when cross compiling, including moving
    # the site-packages folder to the build prefix. So let's just
    # manually add these to the compiler search path.
    _flag_ccp4io="-isystem $BUILD_PREFIX/lib/python$PY_VER/site-packages/ccp4io/libccp4/ccp4"
    _flag_sitepkg="-isystem $BUILD_PREFIX/lib/python$PY_VER/site-packages"
    _flag_annlib="-isystem $BUILD_PREFIX/lib/python$PY_VER/site-packages/annlib_adaptbx/include/"
    CFLAGS="$_flag_ccp4io $_flag_sitepkg $_flag_annlib $CXXFLAGS"
    CXXFLAGS="$_flag_ccp4io $_flag_sitepkg $_flag_annlib $CXXFLAGS"
fi

mkdir _build
cd _build
cmake ../dials \
    "${CMAKE_ARGS}" \
    "-DCMAKE_INSTALL_PREFIX=$PREFIX" \
    "-DPython_EXECUTABLE=$PYTHON" \
    -DCMAKE_BUILD_TYPE=Release \
    -GNinja
cmake --build .
cmake --install .
$PYTHON -mpip install ../dials
