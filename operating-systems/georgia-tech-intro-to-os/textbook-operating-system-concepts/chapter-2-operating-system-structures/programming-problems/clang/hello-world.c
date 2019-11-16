#include <stdio.h>
#include <unistd.h>

int main(void)
{
  write(1, "This will be output to standard out\n", 36);

  return 0;
}