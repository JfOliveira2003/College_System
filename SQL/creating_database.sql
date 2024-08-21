CREATE new database College;

Create table if not exists student(id int primary key auto_increment not null,registration varchar(30), name_ varchar(80), identification_number int, age date, course_id int, constraint fk_course_id foreign key(course_id) references course(id) on delete restrict on update cascade)Engine=InnoDb;

Create table if not exists course(id int primary key auto_increment not null, name_ varchar(120), type_ varchar(80), integral boolean, subjects_id int, work_load int, student_id int, teacher_id int, constraint fk_subjects_id foreign key(subjects_id) references subject_(id) on delete restrict on update cascade, constraint fk_student(table_ course)_id foreign key(student_id) references student(id) on delete restrict on update cascade, constraint fk_teacher(table_teacher)_id foreign key(teacher_id) references teacher(id) on update cascade on delete restrict)Engine=InnoDb;

Create table if not exists subject_(id int primary key auto_increment, title varchar(120), work_load int, points int,)Engine=InnoDb;

CREATE TABLE IF NOT EXISTS teacher(id int primary key auto_increment not null, name_ varchar(80), registration_code varchar(30), academic_background varchar(40), classmate_id int, constraint fk_classmate_id foreign key(classmate_id) references classmate(id) on update cascade on delete restrict)Engine=INNODB;




Create table if not exists classmate(id int primary key auto_increment not null, classmate_code varchar(40), student_id int, teacher_id int,constraint fk_teacher_id foreign key(teacher_id) references teacher(id) on delete restrict on update cascade, constraint fk_student_id foreign key(student_id) references student(id) on update cascade on delete restrict)