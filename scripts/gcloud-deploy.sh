echo 'deploying..'

functionName="${1:-'hello'}"
source="${2:-.}"

echo "FunctionName: $functionName";
echo "Source: $source"

gcloud functions deploy $functionName \
  --source $source \
  --entry-point hello \
  --gen2 \
  --runtime nodejs16 \
  --trigger-http \
  --allow-unauthenticated \
  --project one-for-twelve-32778 \
  --region us-central1

echo 'finished deploy'