#include <windows.h>
#include <cstring>
#include <iostream>
#include <string>
#include<mylib.hpp>

static std::wstring utf8_to_wstring(const std::string& utf8_str) {
    if (utf8_str.empty()) {
        return L"";
    }

    // 第一步：获取转换所需的宽字符长度
    int wcs_len = MultiByteToWideChar(
        CP_UTF8,         // 源编码：UTF-8
        0,               // 转换标志：0（默认）
        utf8_str.c_str(),// 源字符串
        -1,              // 自动计算长度（包含终止符）
        nullptr,         // 输出缓冲区：先不填
        0                // 输出缓冲区大小：0（仅计算长度）
    );

    if (wcs_len == 0) {
        return L""; // 转换失败
    }

    // 第二步：分配缓冲区并执行转换
    std::wstring wstr(wcs_len, L'\0');
    MultiByteToWideChar(
        CP_UTF8,
        0,
        utf8_str.c_str(),
        -1,
        &wstr[0],        // 输出缓冲区
        wcs_len
    );

    return wstr;
}

extern "C" MYLIB_API void winMessageBox(const char* content, const char* title) {

    // 将UTF-8字符串转换为宽字符
    std::string content_str = content ? std::string(content) : "";
    std::string title_str = title ? std::string(title) : "";
    
    std::wstring w_content = utf8_to_wstring(content_str);
    std::wstring w_title = utf8_to_wstring(title_str);

    // 使用宽字符版本的MessageBoxW
    MessageBoxW(
        NULL,
        w_content.c_str(),  // 宽字符内容
        w_title.c_str(),    // 宽字符标题
        MB_OK
    );
}
    

