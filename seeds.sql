INSERT INTO city (name) VALUES ("Aurora"), ("Denver"), ("Highlands Ranch"), ("Lakewood");
INSERT INTO role (title, department_id) VALUES ("Plumber", 1),("Electrician", 2),  ("HVAC", 3), ("Contractor", 4),("Handyman", 5);
INSERT INTO employee (first_name, last_name, role_id, email, phone) VALUES ("Bob", "Brown", 3,"bob@hvac.com", "303-444-2222"), ("Andy", "Apple", 5,"handyandy@gmail.com", "303-336-2352"), ("Lance", "Blue", 2,"blueplumber@yahoo.com", "720-509-6730"), ("Shelly", "Shells", 4,"shellybuilds32@gmail.com", "303-444-2222");

SELECT * FROM department;

SELECT * FROM role;

SELECT * FROM employee;