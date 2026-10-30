function FindProxyForURL(url, host)
{
    // variable strings to return
    var proxy_yes = "PROXY proxy1.bri.co.id:1707";
    var proxy_no = "DIRECT";

    // Intranet (hostname tanpa titik)
    if (isPlainHostName(host)) { return proxy_no; }

    // *.local
    if (shExpMatch(host, "*.local")) { return proxy_no; }

    // *.bri.co.id
    if (shExpMatch(host, "*.bri.co.id")) { return proxy_no; }

    // 10.202.75.146:5173
    if (shExpMatch(url, "*://10.202.75.146:5173*")) { return proxy_no; }

    // Proxy anything else
    return proxy_yes;
}
