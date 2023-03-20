CREATE OR REPLACE FUNCTION update_department_employee_count() RETURNS TRIGGER AS $$
BEGIN
    UPDATE departments
    SET employee_count = employee_count + 1
    WHERE id = NEW.department_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;