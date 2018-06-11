# Training WEB site for Abenosan

## How to Install
### Windows
1. open the command prompt or the windows powershell
2. move to working directory
3. type under code
    ```
    git clone https://github.com/Chiebukuro-developers/TrainingWeb.git
    ```

### Mac or Linux
1. open the terminal
2. move to working directory
3. type under code
    ```
    git clone https://github.com/Chiebukuro-developers/TrainingWeb.git
    ```

## Develop Guideline
### Commit
- please follow the commit format when you commit
#### Commit Format
```
(type)((scope)): (brief commit message)

(detail of commit)

Issue #(Issue No)
```

#### Commit types
- `feat`: when you add new handler and so on
- `fix`: when you fix bug
- `docs`: when you edit document or add new document
- `style`: when you change design(css and so on)
- `comment`: when you change comment in code
- `refactor`: when you change existing code other than `style` or `comment`
- `perf`: when you change code for increased performance
- `merge`: when you merge other branch

#### Scope
- please write files or place affected by commit
- if you have any files affected by commit, Please use `*` or Please separate them with a `, `

#### example
```
style(header, index.html): change style of logo

change width and heaight of the logo in header

Issue #3
```

### Create Branch
- please follow the branch name format when you create new branch

#### Banch name Format
```
(Issue No)-(branch name)
```

#### example
```
docs(README.md): edit README.md

add how to install, develop guideline and so on

Issue #1
```