# Multistage build

FROM composer:1.6.5 as build
LABEL maintainer="biagiopietro.capece@student.unife.it"
WORKDIR /app
COPY . /app
RUN composer install --no-dev --no-progress --no-suggest --prefer-dist --optimize-autoloader

FROM php:7.1.8-apache as final
LABEL maintainer="biagiopietro.capece@student.unife.it"
COPY --from=build /app /app
COPY vhost.conf /etc/apache2/sites-available/000-default.conf
RUN chown -R www-data:www-data /app \
    && docker-php-ext-install mysqli pdo pdo_mysql \
    && a2enmod rewrite
EXPOSE 80
