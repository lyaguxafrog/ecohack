#!/bin/bash


config_app() {
    cp .env.example kernel/.env
    cp kernel/config/local_settings.example kernel/config/local_settings.py
}

get_tls() {
    wget https://acme-v02.api.letsencrypt.org/directory
    mv directory letsencrypt
    exit 0
}



case "$1" in
    config)
        config_app
        ;;
    ssl)
        get_tls
        ;;
    *)
    exit 0
esac
