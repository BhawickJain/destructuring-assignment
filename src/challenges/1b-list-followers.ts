function listFollowers(followerNames: string[]): string {
  // complete function
  // use array destructuring, for practice!

  const [firstFollower, secondFollower, ...theRest] = followerNames
  
  if (followerNames.length === 2) {
    return `Followed by ${firstFollower} and ${secondFollower}`;
  }

  return `Followed by ${firstFollower}, ${secondFollower} and others`;
}

export default listFollowers;
