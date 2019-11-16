1.1) What are the three main purposes of an operating system?

    1. To act as an interface between the user and the computer hardware
    2. To manage and optimize resource utilization based on the computer's purpose
    3. To provide protection and security for the computer system

1.2) We have stressed the need for an operating system to make efficient use of the computing hardware. When is it appropriate for the operating system to forsake this principle and to “waste” resources? Why is such a system not really wasteful?

    The operating will sit idly and do nothing if there is no process or job to run. This is not really wasteful because one of the purposes of the operating system is to perform work based on input from the user, which means that if there is no input, then there is no active reason to use resources from the computing hardware.

1.3) What is the main difficulty that a programmer must overcome in writing an operating system for a real-time environment?

    Giving the illusion of real-time in what is actually a group of concurrent processes, rather than parallel.

1.4) Keeping in mind the various definitions of operating system, consider whether the operating system should include applications such as web browsers and mail programs. Argue both that it should and that it should not, and support your answers.

    For the purpose of making life easier for the user, an operating system should include applications such as web browsers and mail programs because those programs provide an even more user-friendly interface for performing operations that utilize the computer's underlying hardware.

    For the goal of resource and memory optimization, the operating system should not include memory-intensive applications that perform functions which can already be achieved through built-in programs such as the terminal.

1.5) How does the distinction between kernel mode and user mode function as a rudimentary form of protection (security) system?

    The distinction between kernel mode and user mode provides a simple means by which the operating system can determine whether a particular operation was initiated by the user, or by the system. This can ultimately be used to ensure that potentially risky or sensitive processes can only be performed by the system.

1.6) Which of the follow instructions should be privileged?

    a) Set value of timer ✅

    b. Read the clock

    c. Clear memory

    d. Issue a trap instruction

    e. Turn off interrupts ✅

    f. Modify entries in device-status table ✅

    g. Switch from user to kernel mode ✅

    h. Access I/O device

1.7) Some early computers protected the operating system by placing it in a memory partition that could not be modified by either the user job or the operating system itself. Describe two difficulties that you think could arise from such a scheme.

    1. Partitioning can cause separation of resources or programs that may need to communicate.
    2. If the partitioning causes issues, and neither the user or the operating system itself can modify it, how can issues be addressed?

1.8) Some CPUs provide for more than two modes of operation. What are two possible uses of these multiple modes?

     Modes beyond the common two modes of kernel and user allow additional, more complex or sophisticated systems to be possible such as virtualization and clustering. In a virtualized environment, CPUs have a separate mode to indiate when the virtual machine manager is in control of the system. In this mode, the virtual machine manager has more privileges than the user but fewer than the kernel.

1.9) Timers could be used to compute the current time. Provide a short description of how this could be accomplished.

1.10) Give two reasons why caches are useful. What problems do they solve? What problems do they cause? If a cache can be made as large as the
device for which it is caching (for instance, a cache as large as a disk), why not make it that large and eliminate the device?

    Caches are useful for providing faster to access to frequently used data, and for acting as a convenient, temporary storage system for data that does not need to be stored permanently. Due to their limited size, cache management is an important design problem, as well as ensuring that the latest version of particular data is in the cache (versus an outdated version).

    Caching is backed by main memory, which means that if the cache was made as large as a disk, more main memory would be consumed when attempting to read/write larger data. This would slow down the entire system.

1.11) Distinguish between the client–server and peer-to-peer models of distributed systems.

    A client-server system is comprised of two explicitly designated systems: the client and the server. In a peer-to-peer, any system can act as either the client or the server.
