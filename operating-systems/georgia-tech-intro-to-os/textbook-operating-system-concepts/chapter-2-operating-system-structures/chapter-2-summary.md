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
  - i.e. `rm file.txt` searches for a file called `rm`, loads that file into memory, and executes it with the paramter `file.txt`

### 2.2.2 Graphical User Interfaces

### 2.2.3 Choice of Interface

## 2.3 - System Calls

- `System calls` provide an interface to the services made available by an operating system
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

- A running program needs to be abel to halt its execution either normally or abnormally (`end()` or `abort()`)
- If the program runs into a problem and causes an error trap, a dump of memory is sometimes taken and an error message is generated
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
