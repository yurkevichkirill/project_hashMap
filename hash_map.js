import { LinkedList } from "./linked_list.js";

export class HashMap{
    constructor(loadFactor = 0.75, capacity = 16){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = [];
        for(let i = 0; i < this.capacity; i++){
            this.buckets[i] = new LinkedList();
        }
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value){
        const index = this.hash(key);
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        if(this.buckets[index].size() === 0){
            this.buckets[index].append([key, value]);
        } else if(this.buckets[index].contains(key)){
            const listIndex = this.buckets[index].find(key);
            this.buckets[index].removeAt(listIndex);
            this.buckets[index].insertAt([key, value], listIndex);
        } else {
            this.buckets[index].append([key, value]);
        }
        if(this.length() > this.capacity * this.loadFactor){
            for(let i = this.capacity; i < this.capacity * 2; i++){
                this.buckets[i] = new LinkedList();
            }
            this.capacity *= 2;
            const copy = this.entries().slice();
            this.clear();
            copy.forEach((pair) => {
                this.set(pair[0], pair[1]);
            });
        }
    }

    length(){
        let total = 0;
        this.buckets.forEach((bucket) => {
            total += bucket.size();
        });
        return total;
    }

    get(key){
        const index = this.hash(key);
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        if(this.buckets[index].contains(key)){
            const listIndex = this.buckets[index].find(key);
            return this.buckets[index].at(listIndex).data[1];
        }
        else{
            return null;
        }
    }

    has(key){
        const index = this.hash(key);
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        if(this.buckets[index].contains(key)){
            return true;
        }
        else{
            return false;
        }                
    }

    remove(key){
        const index = this.hash(key);
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        if(this.buckets[index].contains(key)){
            const listIndex = this.buckets[index].find(key);
            this.buckets[index].removeAt(listIndex);
            return true;
        } else {
            return false;
        }
    }

    clear(){
        this.buckets.forEach((bucket) => {
            while(bucket.size() > 0){
                bucket.pop();
            }
        })
    }

    keys(){
        let keys = [];
        this.buckets.forEach((bucket) => {
            let listIndex = 0;
            while(listIndex < bucket.size()){
                keys.push(bucket.at(listIndex++).data[0]);
            }
        });
        return keys;
    }

    values(){
        let values = [];
        this.buckets.forEach((bucket) => {
            let listIndex = 0;
            while(listIndex < bucket.size()){
                values.push(bucket.at(listIndex++).data[1]);
            }
        });
        return values;    
    }

    entries(){
        let entries = [];
        this.buckets.forEach((bucket) => {
            let listIndex = 0;
            while(listIndex < bucket.size()){
                entries.push(bucket.at(listIndex++).data);
            }
        });
        return entries;           
    }

}