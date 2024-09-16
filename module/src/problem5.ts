{
    interface Student {
        name: string
        age: number
        grades: number[]
    }
    function calculateAverageGrade(student: Student): number {
        return student.grades.reduce((acc,sum)=>acc+sum,0)/student.grades.length
    }

    const student1: Student = {
        name: 'John',
        age: 20,
        grades: [75, 80, 85, 80, 80]
    }
    
    console.log(calculateAverageGrade(student1))
    
}