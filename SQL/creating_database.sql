CREATE new database College;

Create table if not exists student(id int primary key auto_increment not null,registration varchar(30), name_ varchar(80), identification_number int, age date, course_id int, constraint fk_course_id foreign key(course_id) references course(id) on delete restrict on update cascade)Engine=InnoDb;

Create table if not exists course(id int primary key auto_increment not null, title varchar(120), type_ varchar(80), integral boolean, subjects_id int, work_load int, student_id int, teacher_id int, constraint fk_subjects_id foreign key(subjects_id) references subject_(id) on delete restrict on update cascade, constraint fk_student_id foreign key(student_id) references student(id) on delete restrict on update cascade, constraint fk_teacher_id foreign key(teacher_id) references teacher(id) on update cascade on delete restrict)Engine=InnoDb;

Create table if not exists subject_(id int primary key auto_increment, name varchar(120), teacher_id, student_id, work_load, points int, constraint fk_teacher_id foreign key(teacher_id) references teacher(id) on delete restrict on update cascade,constraint fk_student_id foreign key(student_id) references student(id) on update cascade on delete restrict)Engine=InnoDb;

CREATE TABLE IF NOT EXISTS teacher(id int, name_ varchar(80), registration_code varchar(30), academic_background varchar(40), classmate_id)Engine=INNODB;




Create table if not exists classmate(id int, classmate_code varchar(40), student_id, teacher_id)