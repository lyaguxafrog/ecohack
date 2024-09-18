#!/bin/bash


config_app() {
    cp .env.example kernel/.env
    cp kernel/config/local_settings.example kernel/config/local_settings.py
}



case "$1" in
    config)
        config_app
        ;;
    *)
    exit 0
esac
