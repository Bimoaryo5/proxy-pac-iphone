function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // Alamat intranet (hostname tanpa titik) -> langsung
    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    // *.local dan *.bri.co.id -> langsung
    if (dnsDomainIs(host, ".local") ||
        dnsDomainIs(host, ".bri.co.id") ||
        host === "bri.co.id") {
        return "DIRECT";
    }

    // 10.202.75.146:5173 -> langsung
    if (host === "10.202.75.146" && url.indexOf(":5173") !== -1) {
        return "DIRECT";
    }

    // Sisanya lewat proxy, kalau proxy mati fallback ke direct
    return "PROXY proxy1.bri.co.id:1707; DIRECT";
}
