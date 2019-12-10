# Chapter 2 - Operating System Structures

## Chapter Objectives

- To describe the services an operating system provides to users, processes, and other systems
- To discuss the various ways of structuring an operating system
- To explain how operating systems are installed and customized and how they boot

## 2.1 - Operating System Services

<img src="./assets/Figure 2.1 - Operating System Services.png" width="400">

- An operating system provides an environment for the execution of programs
- System services and functions that are helpful to the user:
  - user interface
    - CLI, batch interface, GUI
  - program execution
    - the system must be able to load a program into memory to run that program
  - i/o operations
  - file-system manipulation
  - communications
  - error detection
- System services and functions that are helpful to the system:
  - resource allocation
  - accounting
    - track users and resource usage
  - protection and security

## 2.2 - User and Operating System Interface

### 2.2.1 Command Interpreters

#### Overview

- Interpreters are known as shells
- The main function of the command interpreter is to get and execute the next user-specifiec command
- In one approach, the interpreter itself contains the code to execute the command
- In another approach (UNIX), commands are implemented through system programs
  - i.e. `rm file.txt` searches for a file called `rm`, loads that file into memory, and executes it
    with the paramter `file.txt`

### 2.2.2 Graphical User Interfaces

### 2.2.3 Choice of Interface

## 2.3 - System Calls

- `System calls` provide an interface to the services that made available by an operating system
- These calls are generally available as routines written in C and C++

<img src="./assets/Figure 2.6 - Handling of a user application system call.png" width="400">

<img src="./assets/Figure 2.7 - Passing parameters as a table.png" width="400">

## 2.4 - Types of System Calls

System calls can be grouped roughly into six major categories:

- process control
- file manipulation
- device manipulation
- information maintenance
- communications
- protection

### 2.4.1 Process Control

#### Overview

- A running program needs to be abel to halt its execution either normally or abnormally (`end()` or
  `abort()`)
- If the program runs into a problem and causes an error trap, a dump of memory is sometimes taken
  and an error message is generated
- The dump is written to disk and may be examined by a `debugger`

#### Examples

- Process control
  - end, abort
  - load, execute
  - create process, terminate process
  - get process attributes, set process attributes
  - wait for time
  - wait for event, signal event
  - allocate and free memory
- File management
  - create file, delete file
  - open, close
  - read, write, reposition
  - get file attributes, set file attributes
- Device management
  - request device, release device
  - read, write, reposition
  - get device attributes, set device attributes
  - logically attach or detach services
- Information maintenance
  - get time or date, set time or date
  - get system data, set system data
  - get process, file, or device attributes
  - set process, file, or device attributes
- Communications
  - create, delete communication connection
  - send, receive messages
  - transfer status information
  - attach or detach remote devices

### 2.4.2 File Management

### 2.4.3 Device Management

## 2.5 - System Programs

- System programs, also known as system utilities, provide a convenient environment for program
  development and execution

- System programs can be divided into the following categories:
  - File management
    - create, delete, copy, rename, print, dump, list, etc
  - Status information
    - performance. logging, debugging
    - these programs format and print the output to the terminal or other output devices
  - File modification
    - several text editors may be available to create and modify file contents
  - Programming-language support
    - compilers, assemblers, debuggers, and interpreters
  - Program loading and execution
  - Communications
    - these programs provide the mechanisms for creating virtual connections among processes, users,
      and computer systems
  - Background services
    - constantly-running system-program processes are known as services, subsystems, or daemons

## 2.6 - Operating-System Design and Implementation

### 2.6.1 Design Goals

- At the highest level, the design of the system will be affected by the choice of hardware and the
  type of system: batch, time sharing, single user, multiuser, distributed, real time, or general
  purpose
- Beyond this, requirements can be divided into two basic groups:
  - user goals
  - system goals

### 2.6.2 Mechanisms and Policies

- One important principle is the distinction of policy from mechanism
  - mechanism determines _how_ to do something
  - policy determines _what_ will be done

### 2.6.3 Implementation

- Early operating systems were written in assembly language
- Now, most are written in a higher-level language such as C or even a higher-level language like
  C++

## 2.7 - Operating-System Structure

- This section discusses how components are interconnected and melded into a kernel

### 2.7.1 Simple Structure

<img src="./assets/Figure 2.12 - Traditional UNIX system structure.png" width="600">

### 2.7.2 Layered Approach

- With proper hardware support, operating systems can be broken into pieces that are smaller and
  more appropriate than those allowed by the original MS-DOS and UNIX systems
- A system can be made modular in many ways, such as the layered approach

<img src="./assets/Figure 2.13 - Layered Operating System.png" width="300">

### 2.7.3 Microkernels

- This method structures the operating system by removing all nonessential components from the
  kernal implementing them as system and user-level programs
- The performance of microkernels can suffer due to increased system-function overhead

<img src="./assets/Figure 2.14 - Architecture of a typical microkernel.png" width="300">

### 2.7.4 Modules

- Perhaps the best current methodology for operating-system design involves using loadable kernel
  modules
- In this model, the kernel has a set of core compoennts and links in additional services via
  modules, either at boot time or during run time
- Linking services dynamically is preferable to adding new features directly to the kernel, which
  would require recompiling the kernel every time a change was made

<img src="./assets/Figure 2.15 - Solaris loadable modules.png" width="300">

### 2.7.5 Hybrid Systems

- It's more common for operating systems to combine different structures versus adopting a single,
  strictly defined structure

<img src="./assets/Figure 2.16 - MacOS hybrid structure.png" width="600">

## Operating-System Debugging

- Debugging is the activity of finding and fixing errors in a system, both in hardware and in
  software
- Debugging can include performance tuning (removing bottlenecks)
- _Kernighan's Law_: “Debugging is twice as hard as writing the code in the first place. Therefore,
  if you write the code as cleverly as possible, you are, by definition, not smart enough to debug
  it.”

## Operating-System Generation

- It is possible to design, code, and implement an operating system specifically for one machine at
  one site
- More commonly, operating systems are designed to run on any of a class of machines at avariety of
  sites with a variety of peripheral configurations
- The system must then be configured or generated for each specific computer site, a process
  sometimes known as `system generation SYSGEN`
- The operating system is normally distributed on disk, on CD-ROM, or DVD-ROM, or as an ISO image,
  which is a file in the format of a CD-ROM or DVD-ROM
- To generate a system, we use a special program
- The `SYSGEN` program reads from a given file, or asks the operator of the system for information
  concerning the config for the hardware system
- The following kinds of information must be determined:
  - What CPU is to be used? What options are installed?
  - How will the boot disk be formatted?
  - How much memory is available?
  - What devices are available?
  - What operating-system options are desired?

## 2.10 - System Boot

- After an operating system is generated, it must be made available for use by the hardware
- The procedure of starting a computer by loading the kernel is known as `booting` the system
- On most computers, a small piece of code known as the `bootstrap program` locates the kernel,
  loads it into main memory, and starts its execution
- This program is in the form `read-only-memory (ROM)` because the `RAM` is in an unknown state at
  system startup
