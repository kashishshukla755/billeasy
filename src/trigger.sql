

CREATE TRIGGER employee_insert_trigger
AFTER INSERT ON employees
FOR EACH ROW
EXECUTE FUNCTION update_department_employee_count();