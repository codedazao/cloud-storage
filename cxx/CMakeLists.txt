cmake_minimum_required(VERSION 3.10)
# 项目名称
set(CMAKE_C_COMPILER "gcc")
set(CMAKE_CXX_COMPILER "g++")
project(cloud-stroage-native)

# 设置 C++ 标准（可选，根据需要指定）
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)


if(CMAKE_SYSTEM_NAME STREQUAL "Windows")
    add_definitions(-DMYLIB_EXPORTS)
endif()
add_library(cloud-stroage-native SHARED src/mylib.cpp)

target_include_directories(cloud-stroage-native PUBLIC ./include)