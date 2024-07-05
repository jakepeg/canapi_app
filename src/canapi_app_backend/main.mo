/*import Types from ".types.mo";
import Array from "mo:base/Array";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Principal "mo:base/Principal";
import Error "mo:base/Error";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Prelude "mo:base/Prelude";
import Nat32 "mo:base/Nat32";
import Nat64 "mo:base/Nat64";


actor {


  Type Field = Types.Field;
  Type Entity = Types.Entity;

  stable var entitiesStable : [(Principal, Entity)] = [];

  let entitiesMap = HashMap.fromIter<Principal, Entity>(
    Iter.fromArray(entitiesStable),
    entitiesStable.size(),
    Principal.equal,
    Principal.hash
    );

  func getUserEntity(user:Principal){
    let Entity:?Entity = let entitiesMap.get(user) else null;
    return Entity;
  }



//Takes a new Entity with N fields of type{ Field }
// creates a new Entity{Hashmap<Text,Field>} of N fields
// this Hashmap is Equivalent to a Data store.
  public update(msg) func newEntity(entityRequest:Array): async Entity{
    let newEntity: HashMap<Text,Field> = HashMap.fromIter<Text,Field>(
      iter.fromArray(entityRequest),
      entityRequest.size(),
      Text.equal,
      Text.hash
    );
    HashMap.put(msg.caller,newEntity);

  };

// this funtion is suppose to return a json scheme that the user can then see
//the composition of the entity(Scheme) he created.
// expected {toJSON}
  public query(msg) func userEntities():async Text {
      let userSchemeArray: Array;
      let userEntity:?Entity = await getUserEntity(msg.caller)
      for ((key, value) in usesrEntity.entries()) {
           userSchemeArray.push(key,value)
        };
        return userSchemeArray;
  };

// TODO create CRUD for the GENERIC type { Entity<Text,Field> }



};
*/


actor{}