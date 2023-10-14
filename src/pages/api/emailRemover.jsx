import { Octokit } from "octokit";

const {
  GIST_ID: gistId,
  GH_TOKEN: githubToken
} = process.env;

const octokit = new Octokit({ auth: githubToken });

export default async function handler(req, res) {
  let gist
  try {
    gist = await octokit.rest.gists.get({ gist_id: gistId })
  } catch (error) {
    console.error(`Unable to get gist\n${error}`)
  }
  
  const filename = Object.keys(gist.data.files)[0];
  let content = gist.data.files[Object.keys(gist.data.files)[0]].content

  content = content.split("\n")
  // if (!content.split(",").includes(req.body.address))
    // let newContent = content.filter((line)=>line[0] == req.body.address)
  


  try {
    gist = await octokit.rest.gists.update({
      gist_id: gistId,
      files:{
        [filename]: {
          content: content + "\n" + req.body.address + "," + Date.now()
        }
      }
    })
  } catch (error) {
    console.error(`Unable to get update gist\n${error}`)
  }

  res.status(200).send()
}