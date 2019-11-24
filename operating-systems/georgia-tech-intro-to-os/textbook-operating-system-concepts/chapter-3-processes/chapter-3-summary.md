# Chapter 3 - Process

## Learning Objectives

- To introduce the notion of a process - a program in execution, which forms the basis of all computation
- To describe the various features of processes, including scheduling, creation and termination, and communication
- To describe communication in client-server systems

## 3.1 - Process Concept

- A batch system executes jobs, whereas a time-shared system has user programs, or tasks
- The terms **job** and **process** are used interchangeably in this text

### 3.1.1 The Process

- A process is a program in execution
- A process generally includes:
  - current activity, represented by the value of the program counter and the contents of the processor's registers
  - stack, which contains temporary data (func params, return addrs, local vars)
  - data section, which contains global variables
  - heap, which is memory that is dynamically allocated during process run time

<div style="text-align:center">
  <img src="./assets/Figure 3.1 - Process in Memory.png" width="200">
</div>

- It is important to note that a program by itself is not a process, because a program is a **passive** entity (i.e. an executable file stored on disk), while a process is an **active** entity (with a program counter specifying the next instruction to execute and a set of associated resources)

### 3.1.2 Process State

- As a process executes, it changes **state**
- A process may be in one of the following states:
  - **New** - the process is being created
  - **Running** - instructions are being executed
  - **Waiting** - the process is waiting for some event to occur (such as I/O completion or reception of a signal)
  - **Ready** - The process is waiting to be assigned to a processor
  - **Terminated** - The process has finished execution
- It is important to realize that only one process can be **running** on any processor at any instant
- Many processes may be **ready** and **waiting**

<div style="text-align:center">
  <img src="./assets/Figure 3.2 - Diagram of Process State.png" width="400">
</div>

### 3.1.3 Process Control Block

- Each process is represented in the operating system by a process control block
- Process control block:
  - Process state: The state may be new, ready, running, waiting, halted, and so on
  - Program counter: The counter indicates the address of the next instruction to be executed for this process
  - CPU registers: The registers vary in number and type, depending on the computer architecture. They include accumulators, index registers, stack pointers, and general-purpose registers, plus any condition-code information. Along with the program counter, this state information must be saved when an interrupt occurs, to allow the process to be continued correctly afterward
  - CPU-scheduling information: This information includes a process priority, pointers to scheduling queues, and any other scheduling parameters.
  - Memory-management information: This information may include such items as the value of the base and limit registers and the page tables, or the segment tables, depending on the memory system used by the operating system
  - Accounting information: This information includes the amount of CPU and real time used, time limits, account numbers, job or process numbers, and so on
  - I/O status information: This information includes the list of I/O devices allocated to the process, a list of open files, and so on
- In brief, the PCB simply servs as the repository for any information that may vary from process to process

<div style="text-align:center">
  <img src="./assets/Figure 3.3 - PCB.png" width="200">
</div>

<div style="text-align:center">
  <img src="./assets/Figure 3.4 - CPU Switch.png" width="300">
</div>

### 3.14 Threads

- The process model discussed so far has implied that a process is a program that performs a single thread of execution
- Most modern operating systems have extended the process concept to allow multiple threads of execution and thus to perform more than one task at a time
- This feature is especially beneficial on multicore systems, where multiple threads can run in parallel

## 3.2 - Process Scheduling

- The objective of multiprogramming is to have some process running at all times, to maximize CPU utilization
- The objective of time sharing is to switch the CPU among processes so frequently that users can interact with each program while it is running
- To meet these objectives, the process scheduler selects an available process for program execution on the CPU
- If there are more processes, the rest will have to wait until the CPU is fee and can be rescheduled

### 3.2.1 Scheduling Queues

- As processes enter the system. they are put into a job queue, which consists of all processes in the system
- The processes that are residing in main memory and are ready and waiting to execute are kept on a list called the ready queue
  - this list is generally stored as a linked list
  - a ready-queue header contains pointers to the first and final PCBs in the list

<div style="text-align:center">
  <img src="./assets/Figure 3.6 - Queueing Diagram.png" width="500">
</div>

### 3.2.2 Schedulers

- The operating system must select, for scheduling purposes, processes from various queues
- The long-term scheduler, or job scheduler, selects processes from disk and loads them into memory execution
- The short-term scheduler, or CPU scheduler, selects from among the processes that are ready to execute and allocates the CPU to one of them
- The primary distinction between these two schedulers liest in the frequency of execution
- In general, most processes can be described as either I/O bound or CPU bound

### 3.2.3 Context Switch

- Interrupts cause the operating system to change a CPU from its current task and to run a kernel routine
- When an interrupt occurs, the system needs to save the current context of the process running on the CPU so that it can restore that context when its processing is done
- Switching the CPU to another process requires performing a state save of the current process and a state restore of a different process
  - this task is known as a context switch

## 3.3 - Operation on Processes

- The processes in most systems can execute concurrently, and they may be created and deleted dynamically
- Each of these new processes may in turn create other processes, forming a tree of processes

<div style="text-align:center">
  <img src="./assets/Figure 3.8 - Tree of Processes.png" width="500">
</div>

### 3.3.1 Process Creation

- Most operating systems identify processes according to a unique process identifier (pid)

- In general, when a process creates a child process, that child process will need certain resources (CPU time, memory, files, I/O devices) to accomplish its task
- A child process may be able to obtain its resources directly from the operating system, or it may be constrained to a subset of the resources of the parent process
- When a process creates a new process, two possibilities for execution exist:
  - the parent continues to execute concurrently with its children
  - the parent waits until some or all of its children have terminated
- There are also address-space possibilities for the new process:
  - the child process is a duplicate of the parent process (same program and data as the parent)
  - the child process has a new program loaded into it

### 3.3.2 Process Termination

- A process terminates when it finishes exeucting its final statement and asks the operating systems to delete it by using the `exit()` system call
- All of the resources of the process--including physical and virtual memory, open files, and I/O buffers--are deallocated by the operating system
- Termination can occur in other circumstances as well
  - a process can cause the termination of anotherp rocess via an appropriate system call
  - Usually, such a system call can be invoked only by the parent of the process (otherwise users could arbitrarily kill each others' jobs)
- A parent may terminate the execution of one of its children for a variety of reasons:
  - the child has exceeded its usage of some of the resources taht it has been allocated
  - the task assigned to the child is no longer required
  - the parent is exiting, and the operating system does not allow a child to continue if its parent terminates

## 3.4 - Interprocess Communication

- Processes executing concurrently in the operating system may be either independent process or cooperating processes
- A process is independent if it cannot affect or be affeted by the other processes executing in the system
- There are several reasons for providing an environment that allows process cooperation:
  - information sharing: users may be interested in the same piece of information
  - computation speedup: subtasks will be executing parallel with the others (assuming multiple processing cores)
  - modularity: we may want to construct the system in a module fashion
  - convenience: even an individual user may work on many tasks at the same time
- Cooperating processes require an **interprocess communication** (IPC) mechanism that will allow them to exchange data and information
- There are two fundamental models of IPC: shared memory and message passing
  - in the shared memory model, a region of memory that is shaered by cooperating processes is established
  - in the message-passing model, communication takes place by means of messages exchnaged between the cooperating processes

<div style="text-align:center">
  <img src="./assets/Figure 3.12 - Communication Models.png" width="500">
</div>

- Message passing is useful for exchanging smaller amounts of data, because no conflicts need to be avoided
- Message passing is also easier to implement in a distributed system than shared memory
- Shared memory can be faster than message passing, since message-passing systems are typically implemented using system calls and thus require the more time-consuming task of kernel intervention
- In shared memory models, system calls are required only to establish shared-memory regions

### 3.4.1 Shared-Memory Systems

- Typically, a shared-memory region resides in the address space of the process creating the shared-memory segment
- Other processes taht wish to communicate using this shared-memory segment must attach it to their address space
- The form of the data and the location are determined by these processes and are not under the operating system's control

### 3.4.2 Message-Passing Systems

- Enables processes to communicate and synchronize their actions without sharing the same address space
- It is particularly useful in a distributed environment, where the communicating processes may reside on different computers connected by a network
- If processes P and Q want to communicate, they must send messages to and receive messages from each other: a communication link must exist between them
- Different methods for implementing a ink and the send `send()` `receive()` operations:
  - direct or indirect communication
  - sync or async communication
  - automatic or explicit buffering

#### 3.4.2.1 Naming

- Processes that want to communicate must have a way to refer to each other; they can use either direct or indirect communication
- Under direct communication, each process that wants to communicate must explicitly name the recipient or sender of the communication
  - a comm link in this scheme has the following properties:
    - a link is established automatically between every pair of processes that want to communicate. the processes need to know only each other's identity to communicate
    - a link is associated with exactly two processes
    - between each pair of processes, there exists exactly one link
- With indirect communication, the messages arent sent to and received from mailboxes, or ports
  - in this scheme, a comm link has the following properties:
    - a link is established between a pair of processes only if both members of the pair have a shared mailbox
    - a link may be associated with more than two proceeses
    - between each pair of communicating processes, a number of different links may exist, with each link corresponding to one mailbox
- If 3 processes share a mailbox, who gets the next message? Depends on which of the following methods are implemented:
  - allow a link to be associated with two processes at most
  - allow at most one process at a time to execute a `receive()` operation
  - allow the system to arbitrarily select which process will receive the message (i.e. round robin)
- A mailbox may be owned either by a process or by the operating system

#### 3.4.2.2 Synchronization

- Comm between processes takes places through calls to `send()` and `receive()` primitives
- Message passing may be either blocking or non-blocking

#### 3.4.2.3 Buffering

- Whether comm is direct or indirect, messages exhanged by comm processes reside in a temp queue
- Such queues can be implemented in 3 ways:
  - zero capacity: queue has a max length of zero; thus, the link cannot have any messages waiting in it. in this case the sender must block until the recipient receives the message
  - bounded capacity: queue has finite length `n`; thus, at most `n` messages can reside in it
  - unbounded capacity: queue is potentially infinite; thus, any number of messages can wait in it (the sender never blocks)

## 3.5 - Examples of IPC Systems

- This section covers three different IPC systems:
  - POSIX
  - Mach
  - Windows

## 3.6 - Communication in Client-Server Systems

- This section covers three other strategies for communication in client-server systems:
  - sockets
  - remote procedure calls (RPCs)
  - pipes

### 3.6.1 Sockets

- A socket is defined as an endpoint for communication
- A pair of processes communicating over a network employs a pair of sockets (one for each process)
- In general, sockets use client-server architecture
- Servers implementing specific services listen to well-known ports
  - All ports below 1024 are considered _well_known_

<div style="text-align:center">
  <img src="./assets/Figure 3.20 - Socket Communication.png" width="300">
</div>

- Communication using sockets--although common and efficient--is considered a low-level form of communication between distributed processes
- It is the responsibility of the client or server to impose a structure on the data

### 3.6.2 Remote Procedure Calls

- The RPC was designed as a way to abstract the procedure-call mechanism for use btween systems with network connections
- In contrast to IPC messages, the messages exchanged in RPC communication are well structured and thus no longer just packets of data
- Each message is addressed to an RPC daemon listening to a port on the remote system, and each contains an identifier specifying the function to execute and the parameters to pass to that function

<div style="text-align:center">
  <img src="./assets/Figure 3.23 - Execution of RPC.png" width="400">
</div>

### 3.6.3 Pipes

- A pipe acts as a conduit allowing two processes to communicate
- Pipes were one of the first IPC mechanisms in early UNIX systems
- In implementing a pipe, four issues must be considered:
  - does the pipe allow bidirectional communication, or is it unidirectional?
  - if two-way communication is allowed, is it half duplex (data can travel only one way at a time) or full duplex (data can travel in both directions at the same time)?
  - must a relationship (such as parent-child) exist between the communication processes?
  - can the pipes communicate over a network, or must the communicating processes reside on the same machine?

#### 3.6.3.1 Ordinary Pipes

- Ordinary pipes allow two processes to communicate in standard producer-consumer fashion:
  - the producer writes to one end of the pipe (the write-end)
  - the consumer reads from the other end (the read-end)
- Ordinary pipes are unidirectional
- Ordinary pipes exist only while the processes are communicating with one another

#### 3.6.3.2 Names Pipes

- Named pipes provide a much more power communicational tool than ordinary pipes
- Communication can be bidirectional, and no parnet-child relationship is required

## 3.7 - Summary

- A process is a program in execution
- As a process executes, it changes state
- The state of the process is defined by that processes' current activity
- Each process may be in one of the following states:
  - new
  - ready
  - running
  - waiting
  - terminated
- Each process is represented in the operating system by its own process control block (PCB)
- A process, when it is not executing, is placed in some waiting queue
  - I/O request queue
  - ready queue
- The ready queue contains all of the processes that are ready to execute and are waiting for the CPU
- The operating system must select processes from various scheduling queues
- Long-term (job) scheduling is the selection of processes that will be allowed to content for the CPU
- Short-term (CPU) scheduling is the selection of one process from the ready queue
- Operating systems must provide a mechanism for parent processes to create new child procecess
- The parent may wait for its children to terminate before proceeding, or the parent and child may execute concurrently
- Processes may be either independent or cooperating
- Cooperating processes require an interprocess communication mechanism
  - shared memory
  - message passing
- Communication in client-server systems may use:
  - sockets
    - connection between a pair of apps consists of a pair of sockets, one at each end of the communication channel
  - RPCs
    - occurs when a process (or thread) calls a procedure on a remote application
  - pipes
    - provide relatively simple ways for processes to communicate with one another
