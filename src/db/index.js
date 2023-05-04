import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("snapshot.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS snapshot (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL);',
                [],
                () => resolve(),
                (_, err) =>  reject(err)
            )
        })
    })

    return promise
}

export const insertSnapshot = (name, image) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO snapshot (name, image) VALUES (?, ?);',
                [name, image],
                (_, result) => resolve(result),
                (_, err) =>  reject(err)
            )
        })
    })

    return promise
}

export const deleteSnapshot = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM snapshot',
                [],
                () => resolve(),
                (_, err) =>  reject(err)
            )
        })
    })

    return promise
}

export const getSnapshot = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM snapshot',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise
}