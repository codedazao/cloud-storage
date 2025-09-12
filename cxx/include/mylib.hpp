#ifndef MYLIB_H
#define MYLIB_H

// 跨平台符号导出宏（Windows 需要，Linux/macOS 自动处理）
#ifdef _WIN32
    #ifdef MYLIB_EXPORTS
        #define MYLIB_API __declspec(dllexport)
    #else
        #define MYLIB_API __declspec(dllimport)
    #endif
#else
    #define MYLIB_API
#endif

#endif // MYLIB_H