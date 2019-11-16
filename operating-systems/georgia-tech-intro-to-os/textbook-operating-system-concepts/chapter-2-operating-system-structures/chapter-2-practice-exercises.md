#### 2.1) What is the purpose of system calls?

    To provide an interface to the services made available by an operating service

#### 2.2) What are the five main major activities of an operating system with regard to process management?

    - end and abort
    - load and execute
    - create and terminate
    - get and set attributes
    - wait and signal event

#### 2.3) What are the three major activities of an operating system with regard to memory management?

    - allocate memory
    - free memory
    - load programs

#### 2.4) What are the tree major activities of an operating system with regard to secondary-storage management?

    - free-space management
    - storage allocation
    - disk scheduling

#### 2.5) What is the purpose of the command interpreter? Why is it usually separate from the kernel?

    - to accept input commands from the user and print output
    - it is separate from the kernel because it is user-driven, and so that it can be easily modified or replaced

#### 2.6) What system calls have to be executed by a command interpreter or shell in order to start a new process?

    - `fork()`

#### 2.7) What is the purpose of system programs?

    - to provide a convenient environment for program development and execution at the system level

#### 2.8) What is the main advantage of the layered approach to system design? What are the disadvantages of the layered approach?

    - main advantage: simplicity of construction and debugging
    - disadvantages:
      - appropriately defining the various layers
      - tend to be less efficient due to I/O operations having to traverse layers

#### 2.9) List five services provided by an operating system, and explain how each creates convenience for users. In which cases would it be impossible for user-level programs to provide these services? Explain your answer.

    - file management
      - convenience: user does not have to work with data and buffers at a lower level to manage files/storage
    - communications
      - convenience: allows the computer to connect to external systems
    - interfaces
      - convenience: can conveniently make system calls via command line or GUI insteas of having to write programs
    - program execution
      - convenience: operating system handles the loading, execution, and termination of a program
    - resource allocation
      - convenience: user does not have to worry about allocating, deallocating, managing resources like memory

#### 2.10) Why do some systems store the operating system in firmware, while others store it on disk?

    - good: firmware can allow for easier distribution/sharing of the operating system
    - not good:
      - executing code in firmware is generally slower than executing code in RAM
      - firmware is relatively expensive
    - storing on disk:
      - disk-bound bootstrap and the operating system itself can be easily changed by writing new versions to disk

#### 2.11) How could a system be designed to allow a choice of operating systems from which to boot? What would the bootstrap program need to do?

    - disk would have to store multiple operating systems
    - bootstrap program would have to
      - read the list of operating systems from disk
      - get input from the user for which system to load
      - load designated operating system into main memory

#### 2.12) The services and functions provided by an operating system can be divided into two main categories. Briefly describe the two categories, and discuss how they differ.

    - user goals:
      - convenience
      - easy to learn
      - fast
      - reliable
      - safe
    - system goals:
      - flexibility
      - reliable
      - error free
      - efficient

#### 2.13 Describe three general methods for passing parameters to the operating system.

    - passed in registers
    - stored in block, table, or memory, and the address of the block is passed as a param
    - placed onto the stack by the program and popped off by the operating system

#### 2.14 Describe how you could obtain a statistical profile of the amount of time spent by a program executing different sections of its code. Discuss the importance of obtaining such a statistical profile.

    - requires either a tracing facility or regular timer interrupts, at which the value of the program counter is recorded
    - this profile is helpful for debugging (and performing tuning)

#### 2.15 What are the five major activities of an operating system with regard to file management?

    - create and delete
    - open and close
    - read, write, and reposition
    - get attributes
    - set attributes

#### 2.16 What are the advantages and disadvantages of using the same systemcall interface for manipulating both files and devices?

#### 2.17 Would it be possible for the user to develop a new command interpreter using the system-call interface provided by the operating system?

    - yes

#### 2.18 What are the two models of interprocess communication? What are the strengths and weaknesses of the two approaches?

    - message-passing model
      - strengths
        - useful for exchanging small amounts of data
        - no conflicts need be avoided
        - easier to implement than shared memory
      - weaknesses
        - not very fast
    - shared-memory model
      - strengths
        - allows max speed and convenience of communication
      - weaknesses
        - protection and synchronization is more complicated

#### 2.19 Why is the separation of mechanism and policy desirable?

    - they are important for flexibility
    - policies are likely to change over time
    - by having the separation, policies can be changed while mechanisms remain static

#### 2.20 It is sometimes difficult to achieve a layered approach if two components of the operating system are dependent on each other. Identify a scenario in which it is unclear how to layer two system components that require tight coupling of their functionalities.

    - if two components depend on each other for different services at changing times, then it would be unclear which layer should be above/below

#### 2.21 What is the main advantage of the microkernel approach to system design? How do user programs and system services interact in a microkernel architecture? What are the disadvantages of using the microkernel approach?

    - a microkernel is easier to extend and port
    - communication takes place between user modules using message passing
    - disadvantage: performance overhead of user space to kernel space communication

#### 2.22 What are the advantages of using loadable kernel modules?

    - each core component is separate
    - loadable as needed
    - each talks to the other over known interfaces
