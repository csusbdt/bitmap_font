#include <iostream>
#include <sstream>
#include <stdio.h>
#include <cassert>

using namespace std;

int main(int argc, char * argv[]) {
	FILE * result = freopen(0, "rb", stdin);
        assert(result == stdin);
	if (result == 0) {
		cout << "Error reoping stdin" << endl;
		exit(1);
	}

        while (true) {
          int r = getc(stdin);
          if (r == EOF) break;
          int g = getc(stdin);
          int b = getc(stdin);
          int a = getc(stdin);
          if (a > 0) {
            r = 255;
            g = 255;
            b = 255;
          }
          putchar(r);  
          putchar(g);  
          putchar(b);  
          putchar(a);  
        } 

/*
	int count = fread(frame, 1, H * W * 4, stdin);
       	assert(count != H * W * 4);
	for (int h = 0; h < H; ++h) {
		for (int w = 0; w < W; ++w) {
			if (frame[h][w][3] > 0) {
				frame[h][w][0] = 255; 
			}
		}
	}
	fwrite(frame, 1, H * W * 4, stdout);
*/
	fflush(stdin);
	pclose(stdin);
	fflush(stdout);
	pclose(stdout);

	return 0;
}

