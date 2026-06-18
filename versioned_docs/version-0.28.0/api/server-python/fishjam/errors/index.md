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
## InvalidFishjamCredentialsError
```python
class InvalidFishjamCredentialsError(HTTPError):
```


---
