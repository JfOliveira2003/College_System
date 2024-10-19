-- CreateTable
CREATE TABLE `classmate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `classmate_code` VARCHAR(40) NULL,
    `student_id` INTEGER NULL,
    `teacher_id` INTEGER NULL,

    INDEX `fk_student_id`(`student_id`),
    INDEX `fk_teacher_id`(`teacher_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_` VARCHAR(120) NULL,
    `type_` VARCHAR(80) NULL,
    `integral` BOOLEAN NULL,
    `subjects_id` INTEGER NULL,
    `work_load` INTEGER NULL,
    `student_id` INTEGER NULL,
    `teacher_id` INTEGER NULL,

    INDEX `fk_student_table_course_id`(`student_id`),
    INDEX `fk_subjects_id`(`subjects_id`),
    INDEX `fk_teacher_table_course_id`(`teacher_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `registration` VARCHAR(30) NULL,
    `name_` VARCHAR(80) NULL,
    `identification_number` INTEGER NULL,
    `age` DATE NULL,
    `course_id` INTEGER NULL,

    INDEX `fk_course_id`(`course_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subject_` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(120) NULL,
    `work_load` INTEGER NULL,
    `points` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teacher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_` VARCHAR(80) NULL,
    `registration_code` VARCHAR(30) NULL,
    `academic_background` VARCHAR(40) NULL,
    `classmate_id` INTEGER NULL,

    INDEX `fk_classmate_id`(`classmate_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `classmate` ADD CONSTRAINT `fk_student_id` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classmate` ADD CONSTRAINT `fk_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `fk_student_table_course_id` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `fk_subjects_id` FOREIGN KEY (`subjects_id`) REFERENCES `subject_`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `fk_teacher_table_course_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `fk_course_id` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teacher` ADD CONSTRAINT `fk_classmate_id` FOREIGN KEY (`classmate_id`) REFERENCES `classmate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

