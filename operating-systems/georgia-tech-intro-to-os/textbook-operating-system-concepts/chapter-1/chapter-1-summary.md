# Chapter 1 - Introduction

## Chapter Objectives

- To describe the basic organization of computer systems
- To provide a grand tour of the major components of operating systems
- To give an overview of the many types of computing environments
- To explore several open-source operating sytems

## 1.1 - What Operating Systems Do

### 1.1.1 User View

- The user's view of the computer varies according to the interface
  - single user: pc + monitor + keyboard + mouse (designed for one user to monopolize resources)
  - multi user: connected to a mainframe (designed to maximize resources utilization)
  - workstations connected via networks (designed to compromise b/w individual usability & resource utilization)

### 1.1.2 System View

- From the computer's point of view, the operating system is the progr most intimately involved with the hardware
- In this regard, the operating system can be viewed as a resource allocator
  - CPU time
  - memory space
  - file-storage space
  - I/O devices

### 1.1.3 Defining Operating Systems

- The fundamental goal of computers systems is to execute user programs and to make solving user prolems easier
- The operating system is the one program running at all times on the computer--usually called the [kernel](<https://simple.wikipedia.org/wiki/Kernel_(computer_science)>)
- Two types of programs:
  - system programs - associated the operating system but are not necessarily part of the kernel
  - application programs - all programs not associated with the operating of the system

## 1.2 - Computer-System Organization

### 1.2.1 Computer-System Operation

#### Overview

- A modern general-purpose computer system consists of one or more CPUs and a number of device controllers connected through a common bus that provides access to shared memory
- To ensure orderly access to the shared memory, a memory controller synchronizes access to the memory
- For a computer to start running, it needs to have an initial program to run
- The bootstrap program must locate the operating-system kernel and load it into memory
- Once the kernel is loaded and executing, it can start providing services to the system and users
- The occurrence of an event is usually signaled by an interrupt from either the hardware or the software

### 1.2.2 Storage Structure

#### Overview

- The CPU can load instructions only from memory, so any programs to run must be stored there
- General-purpose computers run most of their programs from rewritable memory, called main memory (or random-access-memory, RAM)
- All forms of memory provide an array of bytes
- Interaction is achieved through a sequence of `load` or `store` instructions to specific memory addresses
- The `load` instruction moves a byte or word from main memory to internal register within CPU
- The `store` instruction moves the content of a register to main memory

#### Execution

- Typical instruction-execution cycle (von Neumann architecture):
  - fetch instruction from memory
  - store instruction in [instruction register](https://en.wikipedia.org/wiki/Instruction_register)
  - instruction is decoded
  - after instruction on the operands has been executed, the result may be stored back in memory

#### Memory and Storage

- Programs and data cannot reside in main memory permanently
  - main memory is too small to store all needed programs and data permanently
  - main memory is a volatile storage device that loses its contents when power is turned off or otherwise lost
- Secondary storage is used to hold large quantities of data permanently

### 1.2.3 I/O Structure

#### Overview

- Storage is only one of many types of I/O devices
- A large portion of operating system code is dedicated to managing [I/O](https://en.wikipedia.org/wiki/Input/output)
- CPUs and multiple device controllers are connected through a common bus
- Device controllers are responsible for moving the data b/w the peripheral devices and its local buffer storage
- Typically, operating systems have a device driver for each device controller

#### I/O Operation

- To start an I/O operation, the device driver loads the appropriate registers within the device controller
- The device controller exmains the contents of these registers to determine what action take (i.e. read char from keyboard)
- The controller starts the transfer of data from the device to its local buffer
- Once the transfer of data is complete, the controller informs the driver via an `interrupt` that it has finished its operation
- The device driver then returns control to the operating system, possibly returning the data or a pointer to the data if the operation was a read

## 1.3 - Computer-System Architecture

### 1.3.1 Single-Processor Systems

#### Overview

- On a single-processor system, there is one main CPU capable of executing a general-purpose instruction set

### 1.3.2 Multiprocessor Systems

#### Overview

- Such systems have two or more processors in close communication, sharing the computer bus and sometimes the clock, memory, and perhpheral devices
- 3 main advantages:
  - increased throughput
    - higher # of processors ==> more work done in less time
    - but, has diminishing returns due to contention for shared resources
  - economy of scale
    - can cost loess than having multiple single-processor systems
  - increased reliability
    - failure of one processor will not halt the system, only slow it down

### 1.3.3 Clustered Systems

#### Overview

- A clustered system gathers together multiple CPUs
- Differs from multiprocessor systems in that they are composed of two or more individual systems that are joined together

## 1.4 Operating System Structure

- An operating systems provides the environment within which programs are executed
- Operating systems can vary greatly in their makeup

## 1.5 Operating-System Operations

- Modern operating systems are interrupt driven
- If there are no processes to execute, no I/O devices, and no users to whom to respond, an operating system will sit idly

### 1.5.1 Dual-Mode and Multimode Operation

#### Overview

- Operating system must be able to distinguish between operating-system code and user-defined code
- At the very least, two separate modes of operation are needed:
  - user mode
  - kernel mode
- This dual mode provides a means for protecting the operating system from errant users
- Machine instructions that may cause harm are designated as `privileged instructions`

### 1.5.2 Timer

#### Overview

- Operating system must maintain control over the CPU, and cannot allow a program to enter an infinite loop
- To achieve this, a timer is used
- A timer can be set to interrupt the computer after a specified period, to ultimatley prevent a program from running too long

## 1.6 Process Management

- A program does nothing unless its instructions are executed by a CPU
- A program in execution is a process
- A process needs certain resources to accomplish its task
  - CPU time
  - memory
  - files
  - I/O devices
- Resources are given to the process when it is created, or allocated while it is running
- A program is not a process, a program is a passive entity, wheras a process is an active entity
- A process is the unit of work in a system
- Processes can potentially execute concurrently
- The operating system is responsible for:
  - scheduling processes and threads on the CPUs
  - creating and deleting user & system processes
  - suspending and resuming processes
  - providing mechanisms for process synchronization and communication

## 1.7 Memory Management

- The main memory is central to the operation of a modern computer system
- For a program to be executed it must be mapped to absolute addresses and loaded into memory
- The operating system is responsible for:
  - keeping track of which parts of memory are currently being used and who is using them
  - deciding which processes (or parts of processes) and data to move into and out of memory
  - allocation and deallocating memory space as needed

## 1.8 Storage Management

- The operating system abstracts from the physical properties of its storage devices to define a logical storage unit, the file
- The operating system maps files onto physical media and accesses these files via the storage devices

### 1.8.1 File-System Management

#### Overview

- The operating system is responsible for:
  - creating and deleting files
  - creating and deleting repositories to organize files
  - supporting primitives for manipulating files and directories
  - mapping files onto secondary storage
  - backing up files on stable (nonvolatile) storage media

### 1.8.2 Mass-Storage Management

#### Overview

- The operating system is responsible for:
  - free-space allocation
  - storage allocation
  - disk scheduling

### 1.8.3 Caching

#### Overview

- Information is normally kept in some storage system (such as main memory)
- As it is used, it is copied into a faster storage system--the cache--on a temporary basis

### 1.8.4 I/O Systems

#### Overview

- The I/O subsystem consists of several components:
  - memory-management component that includes buffering, caching, and spooling
  - general device-driver interface
  - drivers for specific hardware devices

## 1.9 Protection and Security

- Access to data must be regulated
- Mechanisms ensure that files, memory segments, CPU, and other resources can be operated on by only those processes that have gained proper authorization from the operating system
- Protection and security require the system to be able to distinguish amog all its users
- Most operating systems maintain a list of user names and associated user IDs

## 1.10 Kernal Data Structure

### 1.10.1 Lists, Stacks, and Queues

#### Array

- An array is a simple data structure in which each element can be accessed directly (i.e. main memory)

#### List

- After arrays, `lists` are perhaps the most fundamental data structures in computer science
- Items in a list must be accessed in a particular order
- Types of linked lists:
  - singly linked list
    - each item points to its successor
  - doubly linked list
    - a given item can refer either to its predecessor or successor
  - circularly linked list
    - the last element in the list refers to the first element, rather than to `null`
- Disadvantages:
  - finding a specified item exhibits linear performan O(n)

#### Stack

- A `stack` is a sequentially-ordered data structure that uses the last in, first out (LIFO) principle
- An operating system often uses a stack when invoking function calls

#### Queue

- A queue is a sequentially-ordered data structure that uses the first in, first out (FIFO) principle
- Operating systems commonly uses queues for jobs

### 1.10.2 Tree

- A `tree` is a data structure that can be used to represent data hierarchically
- Data values are linked through parent-child relationships

### 1.10.3 Hash Functions and Maps

- A `hash function` takes data as its input, performs a numeric operation on this data, and returns a numeric value
- This numeric value can then be used as an index into a table
- Retrieving data from the table takes O(1) time

## 1.11 Computing Environments

### 1.11.1 Traditional Computing

### 1.11.2 Mobile Computing

### 1.11.3 Distributed Computing

- A distributed system is a collection of physically separate, possibly heterogeneous, computer systems that are networked
- Access to a shared resource increases computation speed, functionality, data availability, and reliability
- Distributed systems depend on networking for their functionality

### 1.11.4 Client-Server Computing

- User-interface functionality once handled directly by centralized systems is increasingly being handled by PCs, quite often through a web interface
- Many of today's systems act as server systems to satisfy requests generated by client systems
- Server systems can be broadly categorized as:
  - computer-server system
    - provides an interface to which a client can send a request to perform an action (i.e. read data)
    - an example of this is an HTTP server
    - file-server system
      - provides a file-system interface where clients can create, update, read, and delete files
      - an example of this is a web server that delivers files to clients running web browsers

### 1.11.5 Peer-to-Peer Computing

- In this model, clients and servers are not distinguished from one another
- Nodes within the system are considered peers, and each may act as either a client or server, depending on whether it is requesting or providing a service

### 1.11.6 Virtualization

- Virtualization allows operating systems to run as applications within other operating systems

### 1.11.7 Cloud Computing

- Cloud computing is a type of computing that delicers computing, storage, and even applications as a service across a network

### 1.11.8 Real-Time Embedded Systems

- Embedded comptuers are the most prevalent from of computers in existence
- Found everywhere, from car engines and manufacturing robots to microwave ovens
- Embedded systems almsot always run real-time operating systems
