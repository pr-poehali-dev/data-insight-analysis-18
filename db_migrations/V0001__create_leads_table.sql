CREATE TABLE t_p59991303_data_insight_analysi.leads (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  object_type TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);