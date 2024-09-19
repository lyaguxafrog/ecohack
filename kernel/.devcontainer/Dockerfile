FROM mcr.microsoft.com/devcontainers/python:3.12

COPY ./requirements.txt /tmp/

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r /tmp/requirements.txt
