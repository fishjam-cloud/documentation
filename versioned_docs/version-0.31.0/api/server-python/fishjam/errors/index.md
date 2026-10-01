---
title: errors
sidebar_label: errors
custom_edit_url: null
---

# fishjam.errors



## MissingFishjamIdError
```python
class MissingFishjamIdError(ValueError):
```
Inappropriate argument value (of correct type).

---
## StaleSdkError
```python
class StaleSdkError(Exception):
```
Common base class for all non-exit exceptions.

### __init__
```python
def __init__(status: int)
```


### status
```python
status
```
Raw wire value received from the server.

---
## HTTPError
```python
class HTTPError(Exception):
```


---
## BadRequestError
```python
class BadRequestError(HTTPError):
```


---
## UnauthorizedError
```python
class UnauthorizedError(HTTPError):
```


---
## NotFoundError
```python
class NotFoundError(HTTPError):
```


---
## CompositionNotFoundError
```python
class CompositionNotFoundError(NotFoundError):
```


---
## InputNotFoundError
```python
class InputNotFoundError(NotFoundError):
```


---
## OutputNotFoundError
```python
class OutputNotFoundError(NotFoundError):
```


---
## RendererNotFoundError
```python
class RendererNotFoundError(NotFoundError):
```


---
## ServiceUnavailableError
```python
class ServiceUnavailableError(HTTPError):
```


---
## InternalServerError
```python
class InternalServerError(HTTPError):
```


---
## ConflictError
```python
class ConflictError(HTTPError):
```


---
## QuotaExceededError
```python
class QuotaExceededError(HTTPError):
```


---
## InvalidFishjamCredentialsError
```python
class InvalidFishjamCredentialsError(HTTPError):
```


---
