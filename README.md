# Social Media Performance Insights Application

## Project Overview

This project is a Social Media Performance Insights application that allows users to analyze engagement data from social media platforms. The app leverages Langflow for workflow and GPT integration to provide actionable insights and uses Astra DB (DataStax) to store and query the dataset. Users can interact with the data through a chat-like interface on the frontend, built using Next.js and make the insights more comprehensible.

---

## Tech Stack

- _Frontend_: Next.js
- _Backend_: Next.js API Routes
- _Workflow Management_: Langflow
- _Database_: DataStax Astra DB
- _Styling_: Tailwind CSS with ShadCN

---

## Dummy Data Generation

The following Python code generates a dummy dataset simulating social media engagement. The dataset includes columns for post_id, post_type, likes, shares, comments, engagement_rate, and created_at.

### Python Code

python
import random
import uuid
import pandas as pd
from datetime import datetime, timedelta

# Define constants

POST_TYPES = ["carousel", "reels", "static_image"]
NUM_RECORDS = 500

# Helper function to generate random engagement data

def generate_engagement_data(post_type):
base_likes = random.randint(50, 200)
base_shares = random.randint(5, 50)
base_comments = random.randint(3, 25)

    # Engagement based on post type
    if post_type == "carousel":
        likes = base_likes * 1.2
        shares = base_shares * 1.1
        comments = base_comments * 1.3
    elif post_type == "reels":
        likes = base_likes * 1.5
        shares = base_shares * 1.4
        comments = base_comments * 1.8
    else:  # static_image
        likes = base_likes
        shares = base_shares
        comments = base_comments

    total_engagement = likes + shares + comments
    engagement_rate = total_engagement / (likes + 1)  # Prevent divide-by-zero
    return int(likes), int(shares), int(comments), round(engagement_rate, 2)

# Generate dataset

data = []
start_date = datetime.now() - timedelta(days=NUM_RECORDS)

for \_ in range(NUM_RECORDS):
post_id = str(uuid.uuid4())
post_type = random.choice(POST_TYPES)
likes, shares, comments, engagement_rate = generate_engagement_data(post_type)
created_at = (start_date + timedelta(days=random.randint(0, 30))).strftime("%Y-%m-%d %H:%M:%S")
data.append([post_id, post_type, likes, shares, comments, engagement_rate, created_at])

# Create DataFrame

columns = ["post_id", "post_type", "likes", "shares", "comments", "engagement_rate", "created_at"]
df = pd.DataFrame(data, columns=columns)

# Save to CSV and JSON

df.to_csv('mock_engagement_data.csv', index=False)
df.to_json('mock_engagement_data.json', orient='records', date_format='iso')

---

## Engagement Rate Formula

## Engagement Rate Formula

The _engagement rate_ is a metric used to measure the effectiveness of a social media post. It is calculated as the ratio of total user interactions (likes, shares, and comments) to a scaled audience size. For this project, the formula is defined as:

\\\`python

# Formula implementation in Python

    total_engagement = likes + shares + comments
    engagement_rate = total_engagement / (likes + 1)  # Prevent divide-by-zero

\\\`

### Explanation

- _total_engagement_: Sum of all user interactions, including likes, shares, and comments.
- _engagement_rate_: Calculated by dividing total_engagement by (likes + 1). This adjustment ensures no division-by-zero errors when likes are very low.

---

## Features

- _Chat-Like Interface_: Users can query insights in natural language.
- _Engagement Insights_: Analyze the performance of different post types (e.g., Reels, Carousels, Static Images).
- _Actionable Recommendations_: GPT generates suggestions for optimizing social media strategy.

---

## How to Run

1. Clone the repository and install dependencies using npm install.
2. Set up environment variables for Langflow and Astra DB integration.
   - FLOW_ID
   - LANGFLOW_ID
   - APPLICATION_TOKEN
3. Run the Next.js application locally using npm run dev.
4. Access the application at http://localhost:3000.

---

Enjoy analyzing your social media performance and optimizing your strategy!
