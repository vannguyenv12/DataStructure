# Class Node

- value
- next

# Class linkedList

## head

## tail

## length

# Method

##### push -> add node into the end of linked list

##### pop -> remove node the end of linked list

##### shift -> remove node the top of linked list

##### unshift -> add node into the top of linked list

##### get -> take index and return node

##### insert -> take index and value, and insert to linked list

## remove -> take index and remove node

# Break it out

## Push

- Create new node
- if empty node, assign newNode into head and tail
- if have node, assign newNode into the tail, and head next
- Update length

## Pop

- If no head, return undefined;
- If length equal 0, head and tail is null
- Loop, and find which is tail previous end
- assign previous tail to the tail
- Update next tail into null
- Update length

## Shift

- If no head, return undefined;
- If length equal 0, head and tail is null
- create variable to store head
- head equal variable next var
- Update length

## Unshift

- Create a new node
- if no head, head equal new node, and tail as the same
- Otherwise, assign head to next new node
- assign new node to head
- Update length

## Get

- if index less than 0, or greater equal length. Return undefined or null
- Create a counter
- Loop and find node

## Insert

- handle special case
- Create a new node
- Create previous node
- Assign new node to next prev node
- Assign next prev node to next new node
- Update length

## Remove

- handle special case
- Create previous node
- Assign next of next of previous node to next previous node
- Update length
