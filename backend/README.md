# Babylon Backend

This backend utilises CQRS and Event Sourcing, therefore
we want to explain the structure briefly.

## Command vs Query

When using CQS (Command Query Separation) we differentiate between read-only queries and writing commands.
Whenever data has to be changed, we publish a command to the command bus and a command handler processes it (this is where the data gets persisted).

The important things to remember are:
1. Queries are **never** allowed to **change data**
2. Commands never return data, they just return whether the command itself is valid (e.g. the validation succeeded)

## Why?

There are many reasons to implement such a pattern, our main reasons were the ability to store a history and to reprocess commands in case of an exception which got fixed afterwards(dead letter queue) - no data should be lost.

## Pipeline

Queries:
```
Controller(DTO) => Service(DTO) => Repository(Model) 
```

Commands:
```
Controller(DTO) => Service(DTO) => Command Bus => CommandHandler(Command) => EventStore & Repository(Model) 
```

## Brief Explanations

DTO: Data transfer objects are used as in- and outputs for services and controllers.

Controller: They are our interfaces for communication (e.g. REST endpoints).

Service: A service handles business logic and decides what to do with the given data.

Repository: A repository is our interface with a datastore/database. Instead of writing custom SQL for example, we abstract the data layer using these repositories and models.

Command Handler: They process requested changes (commands) and persist them in our datastore/database and publish the change as an event (if needed).

## Resources

[Taming reactive Node.js: Stream-oriented architecture with NestJS](https://youtube.com/watch?v=c8hvW14VdkY)
