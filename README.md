NetSafe is an intelligent edge load balancer built on Vercel’s Edge Network, combining real-time traffic routing with AI-powered bot detection to block malicious requests before they reach backend servers.

                Incoming Requests
                       |
                       v
        +-----------------------------+
        |   Vercel Edge AI Classifier |
        |   Real vs Suspicious Traffic|
        +-----------------------------+
              |                  |
       Legit Traffic        Malicious Traffic
              |                  |
              v                  v
+--------------------------+   +----------------+
| Go Load Balancer         |   | Block / Rate   |
| Health Checks + Routing  |   | Limit / Drop   |
+--------------------------+   +----------------+
      |        |        |
      v        v        v
 Backend 1  Backend 2  Backend 3
      |        |        |
      +--------+--------+
               |
               v
        Real-Time Dashboard
        Latency / Traffic / Threats
