export default function Variables() {
    const name = "John Doe"; // string stored in a variable
    let age = 42; // number stored in a variable
    console.log(name, age); // access the variables

    age = age + 1; // increment the age variable
    console.log(name, age); // access the variables

    const names = ["John", "Jane", "Jack", "Jill"]; // array stored in a variable
    console.log(names); // access the variable

    return (
        <div>
            <h2>Variables</h2>
        </div>
    );
}
