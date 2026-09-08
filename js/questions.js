// ==========================================
// Virtual Interview Simulator
// Member 3 - Question Bank
// ==========================================

const questionBank = {

    "Java Developer": [
        {
            question: "What is the difference between JDK, JRE and JVM?",
            difficulty: "Easy",
            keywords: ["JDK", "JRE", "JVM"]
        },
        {
            question: "What are the main features of Java?",
            difficulty: "Easy",
            keywords: ["object oriented", "platform independent", "secure", "robust"]
        },
        {
            question: "What is a class and what is an object in Java?",
            difficulty: "Easy",
            keywords: ["class", "object", "instance"]
        },
        {
            question: "What is inheritance in Java?",
            difficulty: "Easy",
            keywords: ["inheritance", "extends", "parent", "child"]
        },
        {
            question: "What is method overloading?",
            difficulty: "Medium",
            keywords: ["overloading", "same method", "parameters", "compile time"]
        },
        {
            question: "What is method overriding?",
            difficulty: "Medium",
            keywords: ["overriding", "runtime", "inheritance", "same method"]
        },
        {
            question: "What is the difference between ArrayList and LinkedList?",
            difficulty: "Medium",
            keywords: ["ArrayList", "LinkedList", "array", "nodes"]
        },
        {
            question: "What is exception handling in Java?",
            difficulty: "Medium",
            keywords: ["try", "catch", "finally", "exception"]
        },
        {
            question: "What is multithreading in Java?",
            difficulty: "Hard",
            keywords: ["thread", "multithreading", "concurrent", "parallel"]
        },
        {
            question: "What is garbage collection in Java?",
            difficulty: "Hard",
            keywords: ["garbage collection", "memory", "JVM", "objects"]
        }
    ],

    "Web Developer": [
        {
            question: "What is HTML?",
            difficulty: "Easy",
            keywords: ["HTML", "structure", "web page"]
        },
        {
            question: "What is CSS?",
            difficulty: "Easy",
            keywords: ["CSS", "style", "design", "web page"]
        },
        {
            question: "What is JavaScript?",
            difficulty: "Easy",
            keywords: ["JavaScript", "programming", "dynamic", "web"]
        },
        {
            question: "What is the difference between id and class in HTML?",
            difficulty: "Easy",
            keywords: ["id", "class", "unique", "multiple"]
        },
        {
            question: "What is the DOM?",
            difficulty: "Medium",
            keywords: ["DOM", "document", "object", "HTML"]
        },
        {
            question: "What is responsive web design?",
            difficulty: "Medium",
            keywords: ["responsive", "mobile", "screen", "CSS"]
        },
        {
            question: "What is the difference between let, const and var?",
            difficulty: "Medium",
            keywords: ["let", "const", "var", "scope"]
        },
        {
            question: "What is an API?",
            difficulty: "Medium",
            keywords: ["API", "application", "interface", "request"]
        },
        {
            question: "What is asynchronous programming in JavaScript?",
            difficulty: "Hard",
            keywords: ["asynchronous", "promise", "async", "await"]
        },
        {
            question: "What is event bubbling in JavaScript?",
            difficulty: "Hard",
            keywords: ["event bubbling", "event", "parent", "child"]
        }
    ],

    "Python Developer": [
        {
            question: "What is Python?",
            difficulty: "Easy",
            keywords: ["Python", "programming", "high level", "interpreted"]
        },
        {
            question: "What are Python lists?",
            difficulty: "Easy",
            keywords: ["list", "ordered", "mutable", "collection"]
        },
        {
            question: "What is a tuple in Python?",
            difficulty: "Easy",
            keywords: ["tuple", "immutable", "collection"]
        },
        {
            question: "What is a dictionary in Python?",
            difficulty: "Easy",
            keywords: ["dictionary", "key", "value"]
        },
        {
            question: "What is the difference between a list and a tuple?",
            difficulty: "Medium",
            keywords: ["list", "tuple", "mutable", "immutable"]
        },
        {
            question: "What is a function in Python?",
            difficulty: "Medium",
            keywords: ["function", "def", "parameter", "return"]
        },
        {
            question: "What are Python decorators?",
            difficulty: "Medium",
            keywords: ["decorator", "function", "wrapper"]
        },
        {
            question: "What is exception handling in Python?",
            difficulty: "Medium",
            keywords: ["try", "except", "finally", "exception"]
        },
        {
            question: "What is a generator in Python?",
            difficulty: "Hard",
            keywords: ["generator", "yield", "iterator"]
        },
        {
            question: "What is the Global Interpreter Lock in Python?",
            difficulty: "Hard",
            keywords: ["GIL", "thread", "Python", "interpreter"]
        }
    ],

    "Data Analyst": [
        {
            question: "What is data analysis?",
            difficulty: "Easy",
            keywords: ["data", "analysis", "insights", "decision"]
        },
        {
            question: "What is a dataset?",
            difficulty: "Easy",
            keywords: ["dataset", "data", "rows", "columns"]
        },
        {
            question: "What is the mean?",
            difficulty: "Easy",
            keywords: ["mean", "average", "sum", "values"]
        },
        {
            question: "What is the difference between data and information?",
            difficulty: "Easy",
            keywords: ["data", "information", "processed"]
        },
        {
            question: "What is data cleaning?",
            difficulty: "Medium",
            keywords: ["data cleaning", "missing", "duplicate", "errors"]
        },
        {
            question: "What is correlation?",
            difficulty: "Medium",
            keywords: ["correlation", "relationship", "variables"]
        },
        {
            question: "What is SQL used for?",
            difficulty: "Medium",
            keywords: ["SQL", "database", "query", "data"]
        },
        {
            question: "What is data visualization?",
            difficulty: "Medium",
            keywords: ["visualization", "chart", "graph", "data"]
        },
        {
            question: "What is regression analysis?",
            difficulty: "Hard",
            keywords: ["regression", "prediction", "variables", "model"]
        },
        {
            question: "What is the difference between supervised and unsupervised learning?",
            difficulty: "Hard",
            keywords: ["supervised", "unsupervised", "labeled", "unlabeled"]
        }
    ]
};


// Get questions for selected role and difficulty
function getQuestions(role, difficulty, count) {

    const roleQuestions = questionBank[role] || [];

    let filtered = roleQuestions.filter(function (item) {
        return item.difficulty === difficulty;
    });

    // If selected difficulty does not have enough questions,
    // use questions from all difficulties.
    if (filtered.length < count) {
        filtered = roleQuestions.slice();
    }

    // Shuffle questions
    filtered.sort(function () {
        return Math.random() - 0.5;
    });

    return filtered.slice(0, count);
}