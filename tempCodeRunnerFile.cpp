#include <pcap.h>
#include <iostream>

void packetHandler(u_char *userData, const struct pcap_pkthdr* pkthdr, const u_char* packet) {
    std::cout << "Packet captured" << std::endl;
}

int main() {
    char errbuf[PCAP_ERRBUF_SIZE];
    pcap_t *descr = pcap_open_live("en0", BUFSIZ, 0, 1000, errbuf);
    
    if (descr == NULL) {
        std::cerr << "pcap_open_live() failed: " << errbuf << std::endl;
        return 1;
    }
    
    pcap_loop(descr, 10, packetHandler, NULL);
    pcap_close(descr);
    return 0;
}
