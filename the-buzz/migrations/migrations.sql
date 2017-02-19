CREATE TABLE the_buzz (
id BIGSERIAL PRIMARY KEY,
title VARCHAR(255),
content VARCHAR(255),
category VARCHAR(255),
date_created VARCHAR(255),
date_time_updated VARCHAR(255),
likes INTEGER DEFAULT 0,
hashtag VARCHAR(255));
