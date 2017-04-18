CREATE TABLE [dbo].[Table]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [First Name] VARCHAR(50) NOT NULL, 
    [Last Name] VARCHAR(50) NOT NULL, 
    [Username] NCHAR(10) NOT NULL, 
    [Password] VARBINARY(50) NOT NULL, 
    [Repeat Password] VARBINARY(50) NOT NULL, 
    [Email] [sys].[sysname] NOT NULL, 
    [Programes] VARBINARY(MAX) NOT NULL
)
