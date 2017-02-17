DROP TABLE IF EXISTS wiki;
CREATE TABLE wiki
(id BIGSERIAL PRIMARY KEY,
title VARCHAR(255),
content TEXT,
category VARCHAR(255),
date_created DATE,
date_updated DATE);
