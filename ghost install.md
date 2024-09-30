ghost install

Love open source? We’re hiring JavaScript Engineers to work on Ghost full-time.
https://careers.ghost.org



√ Checking system Node.js version - found v18.20.4
√ Checking current folder permissions
√ Checking memory availability
√ Checking free space
√ Checking for latest Ghost version
√ Setting up install directory
√ Downloading and installing Ghost v5.89.0
√ Finishing install process
? Enter your blog URL: http://localhost:2368
? Enter your MySQL hostname: 127.0.0.1
? Enter your MySQL username: root
? Enter your MySQL password: [hidden]
? Enter your Ghost database name: ghost
√ Configuring Ghost
√ Setting up instance
? Do you wish to set up "ghost" mysql user? No
i Setting up "ghost" mysql user [skipped]                                                                                                                                 
Nginx is not installed. Skipping Nginx setup.
i Setting up Nginx [skipped]
Nginx setup task was skipped, skipping SSL setup
i Setting up SSL [skipped]
? Do you wish to set up Systemd? No
Systemd setup skipped, reverting to local process manager                                                                                                                 
i Setting up Systemd [skipped]
? Do you want to start Ghost? Yes
× Starting Ghost
One or more errors occurred.

1) GhostError

Message: Ghost was able to start, but errored during boot with: Access denied for user 'root'@'localhost' (using password: NO)
Help: Unknown database error

Debug Information:
    OS: Microsoft Windows 11 Home Single Language, v10.0.22631
    Node Version: v18.20.4
    Ghost Version: 5.89.0
    Ghost-CLI Version: 1.26.1
    Environment: production
    Command: 'ghost install'

Additional log info available in: C:\Users\Khiem\.ghost\logs\ghost-cli-debug-2024-08-06T01_55_07_893Z.log

Try running ghost doctor to check your system for known issues.G>:cUm"0a£MWAW47