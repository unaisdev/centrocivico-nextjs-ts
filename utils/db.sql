CREATE TABLE IF NOT EXISTS reservas(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    personas NUMERIC NOT NULL,
    fecha TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    telefono NUMERIC,
)

INSERT INTO reservas(nombre, personas, fecha, telefono) VALUES ($1, $2, $3, $4)